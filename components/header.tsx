import Link from 'next/link';

const Header = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-10 mb-10">
      <h1 className="text-3xl md:text-3xl font-bold tracking-tighter leading-tight md:pr-8">
        <Link href="/">
          <a className="">grap3fruit.dev</a>
        </Link>
      </h1>
      <div className="flex">
        <a
          href="https://www.notion.so/About-c0484baf02b444ca849dba962fc05f13"
          className="mx-3 text-lg"
          target="_blank"
        >
          About
        </a>
        <a href={`https://github.com/grap3fruit`} className="mx-3 text-lg" target="_blank">
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Header;
