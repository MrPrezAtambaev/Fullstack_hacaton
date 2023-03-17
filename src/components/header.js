import React, { useContext, useEffect, useState } from "react";
import variables from "../../styles/variables.module.scss";
import Link from "next/link";
import Image from "next/image";

//MUI
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/router";
import { authContext, useAuth } from "../context/authContext";
import { storageGetItem } from "@/utils/storage";

export default function Header() {
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

  const { logout, currentUser } = useAuth();

  // useEffect(() => {
  //   if (localStorage.getItem("accessToken")) {
  //     checkAuth();
  //   }
  // }, []);

  return (
    <div>
      <div
        className={variables.navbar}
        id={`${isSticky ? variables.sticky : ""}`}>
          <div className={variables.logo_pic_div}>

          <Image src='/icons/logo.png' width={100} height={100} className={variables.logo_pic}/>
          </div>
          <Link href='/' legacyBehavior>
          <a className={variables.logo}>Кайнар</a>

          </Link>
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
            <Link href="/contact" legacyBehavior>
              <a className={variables.a}>Контакты</a>
            </Link>
          </li>
          <li>
            <Link href="/valonters" legacyBehavior>
              <a className={variables.a}>Волонтеры</a>
            </Link>
          </li>
          <li>
            <Link href="/blog" legacyBehavior>
              <a className={variables.a}>Блог</a>
            </Link>
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
                {currentUser ? (
                  <>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center" onClick={logout}>
                        Выйти из {currentUser.email}
                      </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography
                        textAlign="center"
                        onClick={() => router.push("/favorite")}
                      >
                        Favorites
                      </Typography>
                    </MenuItem>
                  </>
                ) : (
                  settings.map((setting) => (
                    <MenuItem key={setting.type} onClick={handleCloseUserMenu}>
                      <Typography
                        textAlign="center"
                        onClick={() => router.push(setting.path)}
                      >
                        {setting.type}
                      </Typography>
                    </MenuItem>
                  ))
                )}
              </Menu>
            </Box>
          </li>
        </ul>
      </div>
      <div className="banner"></div>
    </div>
  );
}
