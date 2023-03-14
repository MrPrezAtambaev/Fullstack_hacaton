import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { authContext } from "@/context/authContext";
import Layout from "@/components/layout";

const Login = () => {
  const router = useRouter();
  const { handleLogin, error, setError } = useContext(authContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleAuth() {
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
    <div>
      <h2>Login Page</h2>
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleAuth}>Login</button>
    </div>
  );
};

export default Login;
