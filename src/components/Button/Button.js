import { useAppContext } from "../../AppContext";
import "./Button.css";

const Button = ({ onClick }) => {
  const { activeTab, tabs } = useAppContext();

  return (
    <button onClick={onClick} className="button">
      {activeTab === tabs[0] ? "Convert" : "Search"}
    </button>
  );
};

export default Button;
