import Head from 'next/head';
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants';

const Meta = () => {
  return (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={`grap3fruit의 블로그 입니다. 😄`} />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      <meta name="google-site-verification" content="-Lu4Wqz-PdQMoyBmazJ9cmqj0Zbu4KqNDy2O8NGL8lU" />
      <meta name="google-site-verification" content="kteodmyS3_P0RsVBVeqK3DTW-V4_9MSId940BnXIkZY" />
    </Head>
  );
};

export default Meta;
