import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { authAxios } from "@/utils/authAxios";
import { storageSetItem } from "@/utils/storage";
import { storageGetItem } from "@/utils/storage";
import { storageDeleteItem } from "@/utils/storage";
import jwtDecode from "jwt-decode";

export const authContext = React.createContext();

export const useAuth = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const storageUser = storageGetItem("user");
    if (Boolean(storageUser) != Boolean(currentUser)) {
      setCurrentUser(storageUser);
    }
  });

  async function handleRegister(formData) {
    try {
      const response = await authAxios.post("/account/register/", formData);
      console.log(response);
      router.push("/auth/login/");
    } catch (error) {
      console.log(error);
    }
  }

  async function handleLogin(formData, email, router) {
    try {
      const { data } = await authAxios.post("/account/login/", formData);
      const user = {
        user_id: jwtDecode(data.access).user_id,
        email: email,
      };
      storageSetItem("accessToken", data.access);
      storageSetItem("refreshToken", data.refresh);
      storageSetItem("user", user);
      setCurrentUser(user.email);
      console.log("accessToken", jwtDecode(data.access));
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  }

  const logout = () => {
    storageDeleteItem("accessToken");
    storageDeleteItem("refreshToken");
    storageDeleteItem("user");
    setCurrentUser(null);
    router.push("/auth/login");
  };

  const values = {
    currentUser,
    error,
    loading,
    logout,

    setCurrentUser,
    setError,
    handleRegister,
    handleLogin,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
