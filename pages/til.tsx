import Container from '../components/container';
import BlogPreviewList from '../components/blog-preview/blog-preview-list';
import HeroPost from '../components/hero-post';
import Layout from '../components/layout';
import { getAllTilPosts } from '../lib/getTilPostApi';
import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';
import Post from '../types/post';
import Header from '../components/header';
import Introduce from '../components/introduce';

type Props = {
  allTILPosts: Post[];
};

const Blog = ({ allTILPosts }: Props) => {
  return (
    <Layout>
      <Head>
        <title>grap3fruit blog</title>
        <meta
          name="google-site-verification"
          content="-Lu4Wqz-PdQMoyBmazJ9cmqj0Zbu4KqNDy2O8NGL8lU"
        />
      </Head>
      <Container>
        <Header />
        <BlogPreviewList category={'til'} posts={allTILPosts} />
      </Container>
    </Layout>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const allTILPosts = getAllTilPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt']);

  return {
    props: { allTILPosts },
  };
};
