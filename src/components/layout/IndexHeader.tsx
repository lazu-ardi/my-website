import Head from 'next/head';
import React from 'react';

const IndexHeader = () => {
  return (
    <div>
      <Head>
        <title>Lazuardi | Frontend Developer</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        ></meta>
        <meta name="description" content="Lazuardi Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default IndexHeader;
