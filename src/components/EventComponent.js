import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EventList from "./Event/EventList";
import AddEvent from "./group/AddGroup";
import EditEvent from "./Event/EditEvent";
 
function EventComponent() {
  return (
    <Router>
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter"> Hello World!
          <Routes>
            <Route exact path="/" element={<EventList/>} />
            <Route path="/add" element={<AddEvent/>} />
            <Route path="/edit/:id" element={<EditEvent/>} />
          </Routes>
        </div>
      </div>
    </div>
    </Router>
  );
}
 
export default EventComponent;