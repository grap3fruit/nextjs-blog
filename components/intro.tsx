import Link from 'next/link';

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8">
        grap3fruit Blog
      </h1>
      <div className="flex">
        <a
          href="https://www.notion.so/About-c0484baf02b444ca849dba962fc05f13"
          className="mx-3 text-xl font-bold hover:underline"
          target="_blank"
        >
          About
        </a>
        <a
          href={`https://github.com/grap3fruit`}
          className="mx-3 text-xl font-bold hover:underline"
          target="_blank"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Intro;
