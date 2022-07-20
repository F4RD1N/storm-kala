import Theme from "../styles/theme";
import Layout from "../layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </>
  );
}
