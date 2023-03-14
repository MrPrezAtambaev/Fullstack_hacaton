
import AuthContextProvider from "@/context/authContext";
import Layout from "../components/layout";
import Navbar from "../components/header";
import variables from '../../styles/variables.module.scss'
import Script from "next/script";

export default function Index() {
  return (
    <>
      <AuthContextProvider>
        <Layout>
          {/* <h1>Hello world</h1> */}
          <div className={variables.banner}></div>
          
        </Layout>
      </AuthContextProvider>
    </>
  );
}
 