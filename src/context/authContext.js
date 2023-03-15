import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Redirect } from "next";
import { authAxios } from "@/utils/authAxios";
import { storageSetItem } from "@/utils/storage";

export const authContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function handleRegister(formData) {
    try {
      const response = await authAxios.post("/account/register/", formData);
      console.log(response);
      router.push("/auth/login/");
    } catch (error) {
      console.log(error);
      // setError(Object.values(err.response.data).flat(2));
    }
  }

  async function handleLogin(formData, email, router) {
    try {
      const { data } = await authAxios.post("/account/login/", formData);
      storageSetItem("accessToken", data.access);
      storageSetItem("refreshToken", data.refresh);
      storageSetItem("email", email);
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
