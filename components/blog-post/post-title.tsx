import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight leading-tight md:leading-relaxed mb-6 mt-10 text-center md:text-left">
      {children}
    </h1>
  );
};

export default PostTitle;
