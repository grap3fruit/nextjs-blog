import Avatar from '../avatar';
import DateFormatter from '../date-formatter';
import PostCoverImage from './post-cover-image';
import PostTitle from './post-title';
import Author from '../../types/author';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <div className="max-w-4xl mx-auto">
      <PostTitle>{title}</PostTitle>
      <div className="flex mb-6 md:mb-12">
        <div className="">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <p className="ml-3 text-lg flex items-center">·</p>
        <div className="ml-3 text-base md:text-lg flex items-center">
          <DateFormatter dateString={date} />
        </div>
      </div>
      <div className="flex justify-between mb-6 md:mb-12 mx-auto">
        <div></div>
        <PostCoverImage title={title} src={coverImage} />
        <div></div>
      </div>
    </div>
  );
};

export default PostHeader;
