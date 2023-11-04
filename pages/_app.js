import "@/styles/globals.css";
import Layout from "../components/layout/layout";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
