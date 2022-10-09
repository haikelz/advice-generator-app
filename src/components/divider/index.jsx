import { useWindowSize } from "../../hooks/useWindowSize";

const Divider = () => {
  const size = useWindowSize();

  return (
    <img
      className="mb-4"
      src={
        size.width >= 375
          ? "/images/pattern-divider-desktop.svg"
          : "/images/pattern-divider-mobile.svg"
      }
      alt="divider"
    />
  );
};

export default Divider;
