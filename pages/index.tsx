import Container from '../components/container';
import BlogPreviewList from '../components/blog-preview/blog-preview-list';
import Layout from '../components/layout';
import { getAllBlogPosts } from '../lib/getBlogPostApi';
import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';
import Post from '../types/post';
import Header from '../components/header';
import Introduce from '../components/introduce';

type Props = {
  allBlogPosts: Post[];
};

const Index = ({ allBlogPosts }: Props) => {
  return (
    <Layout>
      <Head>
        <title>grap3fruit blog</title>
      </Head>
      <Container>
        <Header />
        <Introduce />
        {/* <BlogPreviewList category={'blog'} posts={allBlogPosts} /> */}
      </Container>
    </Layout>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allBlogPosts = getAllBlogPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allBlogPosts },
  };
};
