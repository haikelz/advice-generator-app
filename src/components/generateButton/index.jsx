const GenerateButton = ({ getAdvice }) => {
  return (
    <button
      onClick={getAdvice}
      className="p-4 bg-neonGreen rounded-full -bottom-7 absolute duration-300 transition ease-in-out hover:shadow-all"
    >
      <img className="w-5 h-5" src="/images/icon-dice.svg" alt="dice icon" />
    </button>
  );
};

export default GenerateButton;
