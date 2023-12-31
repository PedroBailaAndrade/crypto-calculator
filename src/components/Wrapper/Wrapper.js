import { useAppContext } from "../../AppContext";
import Content from "../Content/Content";
import Loader from "../Loader/Loader";
import Navigation from "../Navigation/Navigation";
import "./Wrapper.css";

const Wrapper = () => {
  const { loading } = useAppContext();
  return (
    <div className="wrapper">
      <Navigation />
      {loading ? <Loader /> : <Content />}
    </div>
  );
};

export default Wrapper;
