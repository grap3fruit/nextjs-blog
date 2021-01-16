import PostPreview from './post-preview';
import Post from '../types/post';

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section className="flex justify-between">
      {/* <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight"></h2> */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32"> */}
      {/* <div className="grid grid-cols-1 gap-x-16 gap-y-20 mb-32"> */}
      <div></div>
      <div className="mb-32 max-w-5xl">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
      <div></div>
    </section>
  );
};

export default MoreStories;
