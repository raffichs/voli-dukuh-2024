import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Groups from "./components/Groups";
import Fixtures from "./components/Schedules";

function App() {
  return <div className="content-center p-3 text-[#ffffff] bg-[#0070b8] border-[8px] border-[#0000007d]">
    <h1 className="font-medium text-2xl text-center mb-3">VOLI <span className="font-extra">DUKUH 2024</span></h1>
    <BrowserRouter>
      <Groups />
      <Fixtures />
    </BrowserRouter>
  </div>;
}

export default App;
