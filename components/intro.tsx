import Link from 'next/link';

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8">
        grap3fruit Blog
      </h1>
      <div className="flex">
        <h3 className="mx-3 font-bold hover:underline">
          <Link as={`/about`} href="/about">
            About
          </Link>
        </h3>
        <a
          href={`https://github.com/grap3fruit`}
          className="mx-3 font-bold hover:underline"
          target="_blank"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Intro;
