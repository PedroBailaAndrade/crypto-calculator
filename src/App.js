import { AppProvider } from "./AppContext";
import Wrapper from "./components/Wrapper/Wrapper";
import "./App.css";

import "./fonts/Ubuntu/Ubuntu-Bold.ttf";
import "./fonts/Ubuntu/Ubuntu-Light.ttf";
import "./fonts/Ubuntu/Ubuntu-Medium.ttf";
import "./fonts/Ubuntu/Ubuntu-Regular.ttf";

const App = () => {
  return (
    <AppProvider>
      <Wrapper />
    </AppProvider>
  );
};

export default App;
