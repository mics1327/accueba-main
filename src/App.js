import { Homepage } from "./Pages/Homepage";
import { Routes, Route} from "react-router-dom";
import { EmployeePage } from "./Pages/EmployeePage";
import { AdminPage } from "./Pages/AdminPage";
import Footer from "./Components/Footer/Footer";
import './App.css';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/EmployeePage" element={<EmployeePage/>} />
            <Route path="/AdminPage" element={<AdminPage/>} />
          </Routes>
          </div>
          <Footer />
    </div>
  );
}

export default App;
