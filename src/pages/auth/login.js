import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { authContext } from "@/context/authContext";
import reg from "../../../styles/reg.module.scss";
import variables from "../../../styles/variables.module.scss";
import about from "../../../styles/about.module.scss";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Login = () => {
  const router = useRouter();
  const { handleLogin, error, setError } = useContext(authContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleAuth(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    handleLogin(formData, email, router);
  }

  useEffect(() => {
    setError(false);
  }, []);

  return error ? (
    <h2>{error}</h2>
  ) : (
    <>
      <div className={variables.banner}>
        <div className={about.text}>
          <div className={about.aboutContent}>
            <h1 className={about.aboutText}>Login</h1>
          </div>
        </div>
      </div>
      <div className={reg.background}>
        <div className={reg.shape}></div>
        <div className={reg.shape}></div>
      </div>
      <form className={reg.form} style={{ height: "500px" }}>
        <h3>Login</h3>
        <label htmlFor="username" className={reg.label}>
          Email
        </label>
        <input
          type="text"
          placeholder="Email"
          id="username"
          className={reg.input}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password" className={reg.label}>
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          className={reg.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={reg.button} onClick={handleAuth}>
          Log In
        </button>
      </form>
    </>
  );
};

export default Login;
