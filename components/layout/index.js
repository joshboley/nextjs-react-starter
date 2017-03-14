import React from 'react';
import Head from 'next/head';

import Header from '../header';
import Content from '../content';
import Footer from '../footer';

export default ({
  children,
  title = 'Finance Tools',
  description = 'This is the description'
}) => (
  <div>
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Header />
    <Content>
      {children}
    </Content>
    <Footer />
  </div>
);  