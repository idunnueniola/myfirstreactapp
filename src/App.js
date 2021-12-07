import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Section1 from "./Section1";
import David from "./David";

function App() {
  return (
    <div>
      <Navbar />

      <Home />
      <Section1 />
      <div className="content">
        <David />
      </div>
    </div>
  );
}

export default App;
