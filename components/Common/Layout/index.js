import Head from "next/head";
import Navigation from "components/Common/Navigation";
import Footer from "components/Common/Footer";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>RootLogic</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation>
        {children}
        <Footer />
      </Navigation>
    </>
  );
}

export default Layout;
