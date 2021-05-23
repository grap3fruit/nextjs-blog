import PostPreview from './blog-preview';
import Post from '../../types/post';
import SectionSeparator from '../section-separator';

type Props = {
  category: string;
  posts: Post[];
};

const BlogPreviewList = ({ category, posts }: Props) => {
  return (
    <section>
      <div className="max-w-5xl">
        {posts.map((post) => (
          <div key={post.slug + 'div'}>
            <PostPreview
              category={category}
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
            <SectionSeparator key={post.slug + 'separator'} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPreviewList;
