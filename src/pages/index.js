import AuthContextProvider from "@/context/authContext";
import Layout from "../components/layout";

export default function Index() {
  return (
    <>
      <AuthContextProvider>
        <Layout>
          <h1>Hello world</h1>
        </Layout>
      </AuthContextProvider>
    </>
  );
}
