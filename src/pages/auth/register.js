import React, { useState, useEffect, useContext } from "react";
import { authContext } from "@/context/authContext";
import { useRouter } from "next/router";
import variables from "../../../styles/variables.module.scss";
import about from "../../../styles/about.module.scss";
import reg from "../../../styles/reg.module.scss";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Register = () => {
  const { handleRegister, error, setError, loading } = useContext(authContext);

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  useEffect(() => {
    setError(false);
  }, []);

  function handleSave(e) {
    e.preventDefault();
    if (!email.trim() || !password.trim() || !passwordConfirm.trim()) {
      alert("Some inputs are empty!");
      return;
    }
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password2", passwordConfirm);
    handleRegister(formData);
  }

  return (
    <>
      <div className={variables.banner}>
        <div className={about.text}>
          <div className={about.aboutContent}>
            <h1 className={about.aboutText}>Register</h1>
            <p className={about.aboutLinks}>
              {/* <Link href="/" legacyBehavior>
                <a className={about.home}>Home</a>
              </Link> */}
            </p>
          </div>
        </div>
      </div>
      <div className={reg.background}>
        <div className={reg.shape}></div>
        <div className={reg.shape}></div>
      </div>
      {error ? <h2>{error}</h2> : null}
      <form className={reg.form}>
        <h3>Register</h3>

        <label htmlFor="username" className={reg.label}>
          Username
        </label>
        <input
          type="text"
          placeholder="Email or Phone"
          className={reg.input}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password" className={reg.label}>
          Password
        </label>
        <input
          type="text"
          placeholder="Password"
          className={reg.input}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="passwordConfirm" className={reg.label}>
          Password Comfirm
        </label>
        <input
          type="text"
          placeholder="Password Confirm"
          className={reg.input}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />

        <button className={reg.button} onClick={handleSave}>
          Register
        </button>
      </form>
    </>
  );
};

export default Register;
