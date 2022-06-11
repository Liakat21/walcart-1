import Layout from "../component/Layout";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
    <Layout>
      <Component {...pageProps} />{" "}
    </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
