import Theme from "../styles/theme";
import Layout from "../layout";
import Head from "next/head";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
