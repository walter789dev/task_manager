import "./App.css";
import Backlog from "./pages/Backlog";
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
