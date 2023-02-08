import Log from "./components/Log";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from "./components/Info";
import Address from "./components/Address";
import AccountType from "./components/AccountType";
import "./components/Log.css";
import Sidelogo from "./components/Sidelogo";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Sidelogo />
        <Routes>
          <Route path="/" element={<Log />}>
            <Route path="/" element={<Info />} />
            <Route path="/acctounttype" element={<AccountType />} />
            <Route path="/address" element={<Address />} />
           
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
