/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
// import Head from "next/head";
import React from "react";
import { getEntry, getFirstEntry } from "../contentstack/sdk";
import { Layout } from "../components/layout";
import { Homepage } from "../templates/Homepage";

function Home({ homepage, header, footer }) {
  return (
    <Layout
      header={header}
      footer={footer}
      seo={homepage.seo}
    >
      <Homepage page={homepage[0]} />
    </Layout>
  );
}

Home.getInitialProps = async () => {
  try {
    const homepage = await getEntry('homepage', "en-us");
    const header = await getFirstEntry('cocktail_header_section', "en-us");
    const footer = await getFirstEntry('cocktail_footer_section', "en-us");
    return { homepage, header, footer };
  } catch (error) {
    console.error(error);
  }
};

export default Home;
