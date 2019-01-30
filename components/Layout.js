import React from "react";
import { Container } from "semantic-ui-react";
import Head from "next/head";
import Header from "./Header";

export default props => {
  return (
    <Container>
      {/*provides left and right margins*/}
      <Head>
        {/*takes the content and puts it in the head element of HTML structure*/}
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css"
        />
      </Head>
      <Header />
      {props.children}
    </Container>
  );
};
