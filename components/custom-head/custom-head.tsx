import React from "react";
import Head from "next/head";

interface Props {
  title: string;
}

const CustomHead = (props: Props) => {
  const { title } = props;
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default CustomHead;
