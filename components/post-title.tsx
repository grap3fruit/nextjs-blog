import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold tracking-tight leading-tight md:leading-relaxed mb-12 text-center md:text-left">
      {children}
    </h1>
  );
};

export default PostTitle;
