import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route } from "react-router-dom";

const HatsPage = () => {
  return (
    <div>
      <h1>Hats PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
    </div>
  );
}

export default App;
