import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScheduleList from "./schedule/ScheduleList";
import AddSchedule from "./schedule/AddSchedule";
import EditSchedule from "./schedule/EditSchedule";
 
function ScheduleComponent() {
  return (
    <Router>
    <div className="container">
          <Routes>
            <Route exact path="/" element={<ScheduleList/>} />
            <Route path="/add" element={<AddSchedule/>} />
            <Route path="/edit/:id" element={<EditSchedule/>} />
          </Routes>
    </div>
    </Router>
  );
}
 
export default ScheduleComponent;