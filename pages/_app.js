import "@/styles/globals.css";
import Layout from "../components/layout/layout";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-Q4P5GLL6EC"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-Q4P5GLL6EC');
        `}
      </Script>
      <Component {...pageProps} />
    </Layout>
  );
}
