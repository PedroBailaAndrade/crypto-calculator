import { useAppContext } from "../../AppContext";
import Calculator from "../Calculator/Calculator";
import Tickers from "../Tickers/Tickers";
import "./Content.css";

const Content = () => {
  const { activeTab, tabs } = useAppContext();
  return (
    <div className="content">
      {activeTab === tabs[0] ? <Calculator /> : <Tickers />}
    </div>
  );
};

export default Content;
