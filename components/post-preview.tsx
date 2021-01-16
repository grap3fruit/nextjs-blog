import Avatar from './avatar';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import Link from 'next/link';
import Author from '../types/author';
import cn from 'classnames';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({ title, coverImage, date, excerpt, author, slug }: Props) => {
  return (
    // <div className="flex mb-10">
    <div
      className={cn(
        {
          'hover:shadow-medium transition-shadow duration-200': slug,
        },
        'flex p-5'
      )}
    >
      <div className="mb-5 w-1/3">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div className="ml-10 w-2/3">
        <h3 className="text-2xl mb-2 leading-snug">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <p className="cursor-pointer">{title}</p>
          </Link>
        </h3>
        <div className="text-base mb-2">
          <DateFormatter dateString={date} />
        </div>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="text-base leading-relaxed mb-4">{excerpt}</a>
        </Link>
        {/* <Avatar name={author.name} picture={author.picture} /> */}
      </div>
    </div>
  );
};

export default PostPreview;
