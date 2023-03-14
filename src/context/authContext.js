import React, { useState } from "react";
import axios from "axios";

export const authContext = React.createContext();

const API = "http://35.246.210.249/swagger";

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleRegister(formData, router) {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/acount/register/`, formData);
      console.log(res);
      router.push("/login");
    } catch (err) {
      console.log(err);
      setError(Object.values(err.response.data).flat(2));
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin(formData, email, router) {
    try {
      const res = await axios.post(`${API}/acount/login/`, formData);
      localStorage.setItem("tokens", JSON.stringify(res.data));
      localStorage.setItem("email", email);
      setCurrentUser(email);
      console.log(res);
      router.push("/");
    } catch (err) {
      console.log(err);
      setError([err.response.data.detail]);
    }
  }

  const values = {
    currentUser,
    error,
    loading,

    setError,
    handleRegister,
    handleLogin,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
