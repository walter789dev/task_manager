import "./App.css";
import Backlog from "./components/screen/Backlog";
import Navigate from "./components/ui/Navigate";

function App() {
  return (
    <div className="flex">
      <Navigate />
      <Backlog />
    </div>
  );
}

export default App;
