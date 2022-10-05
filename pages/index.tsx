import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../shared/layout/Layout";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <Layout>
        <div></div>
      </Layout>
    </div>
  );
};

export default Home;
