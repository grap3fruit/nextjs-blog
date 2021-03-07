const Introduce = () => {
  return (
    <section className="hidden md:flex">
      <div>
        <img
          className="md:w-28 md:h-28 rounded-full mr-8"
          src="/assets/blog/authors/sw-pb-origin.jpg"
        />
      </div>
      <div>
        <div className="mb-5 md:text-2xl">안녕하세요! grap3fruit의 블로그 입니다.</div>
        <div className="md:text-base">
          현재 Web FE 직무를 준비하고 있으며, Web FE, BE, UX 그리고 Machine Learning에 관심이
          많습니다.
        </div>
        <div className="mb-5 md:text-base">사람들에게 도움이 되는 서비스를 만들고 싶습니다. 😊</div>
      </div>
    </section>
  );
};

export default Introduce;
