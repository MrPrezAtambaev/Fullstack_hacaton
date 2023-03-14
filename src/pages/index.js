import AuthContextProvider from "@/context/authContext";
import Layout from "../components/layout";
import variables from "../../styles/variables.module.scss";

export default function Index() {
  return (
    <>
      <AuthContextProvider>
        <div className={variables.banner}></div>
      </AuthContextProvider>
    </>
  );
}
