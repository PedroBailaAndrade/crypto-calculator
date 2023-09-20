import { useAppContext } from "../../AppContext";
import "./Navigation.css";

const Navigation = () => {
  const { activeTab, tabs, setActiveTab } = useAppContext();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="navigation">
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`tab ${tab === activeTab ? "isActive" : ""}`}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default Navigation;
