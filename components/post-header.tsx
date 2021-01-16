import Avatar from './avatar';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import PostTitle from './post-title';
import Author from '../types/author';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:flex md:mb-12">
        <div className="">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <p className="md:mt-3 ml-3 md text-lg">·</p>
        <div className="md:mt-3 ml-3 md text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
      <div className="max-w-4xl mb-8 md:mb-16 mx-auto">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="block md:hidden mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
