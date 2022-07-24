import Theme from "../styles/theme";
import Layout from "../layout";

//redux
import { Provider } from "react-redux";
import store from "../redux/store";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

const _app = ({ Component, pageProps }) => {
  return (
    <>
      <Provider store={store}>
        <Theme>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Theme>
      </Provider>
    </>
  );
};

export default _app;
