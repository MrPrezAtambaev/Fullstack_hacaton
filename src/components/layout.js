import React from "react";
import Header from "./header";
import Head from "next/head";
import Footer from "./footer";
import AuthContextProvider from "@/context/authContext";
import PetContextProvider from "@/context/petsContext";
import FavContextProvider from "@/context/favContext";

const Layout = ({ children, title = "KAINAR" }) => {
  return (
    <FavContextProvider>
      <PetContextProvider>
        <AuthContextProvider>
          <nav>
            <Head>
              <meta charset="utf-8" />
              <title>{title} | MAKERS </title>
              <link
                rel="shortcut icon"
                href="/icons/logo.png"
                type="image/x-icon"
              />
              <link
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                rel="stylesheet"
              />
            </Head>
            <Header />
          </nav>
          <main>{children}</main>
          <Footer />
        </AuthContextProvider>
      </PetContextProvider>
    </FavContextProvider>
  );
};

export default Layout;
