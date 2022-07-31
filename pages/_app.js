import Theme from "../styles/theme";
import Layout from "../layout";

//redux
import { Provider } from "react-redux";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";
import store, { persistor } from "../redux/store";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

//config
import "../config";

const _app = ({ Component, pageProps }) => {
  if (Component.getLayout) {
    return Component.getLayout(
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Theme>
            <Component {...pageProps} />
          </Theme>
        </PersistGate>
      </Provider>
    );
  }

  return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Theme>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Theme>
        </PersistGate>
      </Provider>
  );
};

export default _app;
