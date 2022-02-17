import Layout from "components/Common/Layout";
import "../style/globals.css";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <NextNProgress
          color="#FF1D31"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
