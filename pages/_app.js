import "../styles/globals.css";
import Head from "next/head";
import { Fragment } from "react";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <title>Furniture Creations</title>
      </Head>
      <Header></Header>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
