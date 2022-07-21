import Theme from "../styles/theme";
import Layout from "../layout";
import Head from "next/head";

const _app = ({ Component, pageProps }) => {
  return (
    <>
      <Theme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </>
  );
};

export default _app;
