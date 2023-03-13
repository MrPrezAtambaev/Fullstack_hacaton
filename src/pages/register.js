import React, { useState, useEffect, useContext } from "react";
import { authContext } from "@/context/authContext";
import { useRouter } from "next/router";

const Register = () => {
  const { handleRegister, error, setError, loading } = useContext(authContext);
};
