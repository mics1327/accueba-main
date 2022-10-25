import { Homepage } from "./Pages/Homepage";
import { Routes, Route} from "react-router-dom";
import { EmployeePage } from "./Pages/EmployeePage";
import { AdminPage } from "./Pages/AdminPage";

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
    </div>
  );
}

export default App;
