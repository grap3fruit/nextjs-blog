const Introduce = () => {
  return (
    <section className="">
      <img
        className="object-cover h-96 min-w-full sm:min-w-max md:min-w-max ml-auto mr-auto"
        src="/assets/blog/cover/logo.png"
      />
      <div className="mb-5 text-2xl">안녕하세요! grap3fruit의 블로그 입니다.</div>
      <div className="text-base">
        현재 Web FE 직무를 준비하고 있으며, Web FE, BE, UX 그리고 Machine Learning에 관심이
        있습니다.
      </div>
      <div className="mb-5 text-base">
        사람들에게 도움이 되는 서비스를 만드는 것을 좋아합니다. 😊
      </div>
    </section>
  );
};

export default Introduce;
