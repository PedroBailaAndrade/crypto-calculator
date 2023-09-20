import { useAppContext } from "../../AppContext";
import "./Title.css";

const Title = () => {
  const { activeTab, tabs } = useAppContext();

  return (
    <div className="title">
      {activeTab === tabs[0] ? "Crypto Calculator" : "Tickers"}
    </div>
  );
};

export default Title;
