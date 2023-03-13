import React, { useState } from "react";
import axios from "axios";

export const authContext = React.createContext();

const API = "";

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleRegister(formData, router) {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/account/register/`, formData);
      console.log(res);
      router.push("/login");
    } catch (err) {
      console.log(err);
      setError(Object.values(err.response.data).flat(2));
    } finally {
      setLoading(false);
    }
  }

  const values = {
    currentUser,
    error,
    loading,

    setError,
    handleRegister,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
