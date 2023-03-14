import Layout from "../components/layout";
import AuthContextProvider from "../context/authContext";
import global from '../../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
