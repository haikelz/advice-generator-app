const Advice = ({ advice }) => {
  return (
    <>
      <p className="text-neonGreen leading-relaxed tracking-[0.2em] uppercase">
        Advice #{advice.id ? advice.id : "0"}
      </p>
      <p className="text-white text-quote my-5 desktop:my-8">
        {advice.advice ? `“${advice.advice}”` : "Wait...."}
      </p>
    </>
  );
};

export default Advice;
