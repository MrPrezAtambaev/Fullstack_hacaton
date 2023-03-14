import React from "react";
import Header from "./header";
import Head from "next/head";
import Footer from "./footer";
import AuthContextProvider from "@/context/authContext";

const Layout = ({ children, title = "KAINAR" }) => {
  return (
    <AuthContextProvider>
      <nav>
        <Head>
          <title>{title} | MAKERS </title>
          <link
            rel="shortcut icon"
            href="../../../icons/logo.png"
            type="image/x-icon"
          />
        </Head>
        <Header />
        <main>{children}</main>
        <Footer />
      </nav>
    </AuthContextProvider>
  );
};

export default Layout;
