import { adviceAtom } from "./store";
import { useAtom } from "jotai";
import { useEffect } from "react";
import Advice from "./components/advice";
import Divider from "./components/divider";
import GenerateButton from "./components/generateButton";
import Layout from "./components/layout";

const App = () => {
  const [advice, setAdvice] = useAtom(adviceAtom);

  const getAdvice = async () => {
    try {
      const response = await fetch(`https://api.adviceslip.com/advice`);
      const data = await response.json();

      setAdvice(data.slip);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <Layout>
      <div className="bg-darkGrayishBlue w-[35rem] relative rounded-xl px-4 py-10 desktop:p-12 flex justify-center flex-col items-center">
        <Advice advice={advice} />
        <Divider />
        <GenerateButton getAdvice={getAdvice} />
      </div>
    </Layout>
  );
};

export default App;
