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
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <div className="flex cursor-pointer">
        <div className="hidden md:block md:w-1/3">
          <CoverImage slug={slug} title={title} src={coverImage} />
        </div>
        <div className="md:ml-10 md:w-2/3">
          <div className="mb-5 block md:hidden">
            <CoverImage slug={slug} title={title} src={coverImage} />
          </div>
          <h3 className="text-2xl mb-2 leading-snug">
            <p>{title}</p>
          </h3>
          <div className="text-base mb-2">
            <DateFormatter dateString={date} />
          </div>
          <p className="text-base leading-relaxed mb-4">{excerpt}</p>
          {/* <Avatar name={author.name} picture={author.picture} /> */}
        </div>
      </div>
    </Link>
  );
};

export default PostPreview;
