import Layout from "../components/layout";
import AuthContextProvider from "../context/authContext";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
