import { Route, Routes } from "react-router";
import "./App.css";
import Backlog from "./components/screen/Backlog";
import Navigate from "./components/screen/Navigate";
import Sprint from "./components/screen/Sprint";

function App() {
  return (
    <div className="flex">
      <Navigate />
      <Routes>
        <Route index element={<Backlog />} />
        <Route path="sprint/:id" element={<Sprint />} />
      </Routes>
    </div>
  );
}

export default App;
