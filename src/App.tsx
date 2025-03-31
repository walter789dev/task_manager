import "./App.css";
import Backlog from "./components/screen/Backlog";
import Navigate from "./features/navigate/Navigate";

function App() {
  return (
    <div className="flex">
      <Navigate />
      <Backlog />
    </div>
  );
}

export default App;
