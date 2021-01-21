import cn from 'classnames';
import Link from 'next/link';

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const BlogPreviewCoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className="shadow-small md:object-cover h-48 md:w-full"
    />
  );
  return <div className="sm:mx-0">{slug ? <a aria-label={title}>{image}</a> : image}</div>;
};

export default BlogPreviewCoverImage;
