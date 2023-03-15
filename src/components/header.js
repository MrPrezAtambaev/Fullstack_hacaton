import React, { useEffect, useState } from "react";
import variables from "../../styles/variables.module.scss";
import Link from "next/link";

//MUI
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/router";

export default function header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // MUI
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const router = useRouter();

  const settings = [
    {
      type: "Register",
      path: "/auth/register",
    },
    {
      type: "Login",
      path: "/auth/login",
    },
  ];

  return (
    <div>
      <div
        className={variables.navbar}
        id={`${isSticky ? variables.sticky : ""}`}
      >
        <a className={variables.logo}>Кайнар</a>
        <ul className={variables.ul}>
          <li>
            <Link href="/" legacyBehavior>
              <a className={variables.a}> Главная</a>
            </Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              <a className={variables.a}> О Нас</a>
            </Link>
          </li>
          <li>
            <a href="$" className={variables.a}>
              Контакты
            </a>
          </li>
          <li>
            <a href="$" className={variables.a}>
              {" "}
              Волонтёры
            </a>
          </li>
          <li>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Account">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="" src="..." />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              >
              {settings.map((setting) => (
                <MenuItem key={setting.type} onClick={handleCloseUserMenu}>
                  <Typography
                    align="center"
                    onClick={() => router.push(setting.path)}
                  >
                    {setting.type}
                  </Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
              </li>
        </ul>
      </div>
      <div className="banner"></div>
    </div>
  );
}
