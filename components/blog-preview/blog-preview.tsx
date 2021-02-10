import Avatar from '../avatar';
import DateFormatter from '../date-formatter';
import PreviewCoverImage from './blog-preview-cover-image';
import Link from 'next/link';
import Author from '../../types/author';
import cn from 'classnames';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  category: string;
};

const BlogPreview = ({ title, coverImage, date, excerpt, author, slug, category }: Props) => {
  return (
    <Link as={`/${category}/${slug}`} href={`/${category}/${slug}`}>
      <div className="flex cursor-pointer hover:bg-gray-50 text-black hover:text-opacity-80 mt-10 mb-10">
        <div className="hidden md:block md:w-1/3">
          <PreviewCoverImage slug={slug} title={title} src={coverImage} />
        </div>
        <div className="md:ml-10 md:w-2/3">
          <div className="mb-5 md:hidden flex justify-between">
            <div></div>
            <PreviewCoverImage slug={slug} title={title} src={coverImage} />
            <div></div>
          </div>
          <h3 className="text-xl font-bold mb-3 leading-snug">
            <p>{title}</p>
          </h3>
          <div className="text-base mb-3">
            <DateFormatter dateString={date} />
          </div>
          <p className="text-base leading-relaxed h-20 overflow-hidden">{excerpt}</p>
          {/* <Avatar name={author.name} picture={author.picture} /> */}
        </div>
      </div>
    </Link>
  );
};

export default BlogPreview;
