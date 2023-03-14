import AuthContextProvider from "@/context/authContext";
import Layout from "../components/layout";

export default function Index() {
  return (
    <>
      <AuthContextProvider>
        <h1>Hello world</h1>
      </AuthContextProvider>
    </>
  );
}
