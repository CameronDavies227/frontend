import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { Accordion } from 'react-bootstrap';
 
const ScheduleList = () => {
    const [schedules, setSchedule] = useState([]);

    useEffect(() => {
        getSchedules();
    }, []);
 
    const getSchedules = () => {
        var url = `http://localhost:5000/schedules/getAllSchedules/`
        fetch(url, 
            {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        )
        .then(response=>response.json())
        .then(data=>setSchedule(data))
        .catch(error => console.error(error));
    }
 
    const deleteSchedule = (id) => {
        var url = `http://localhost:5000/schedules/deleteSchedule/${id}`
        fetch(url, 
            {
                method: 'DELETE',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        )
        getSchedules();
    }



 
    return (
        <div>
                <Accordion>
                <table className="table is-striped is-fullwidth">
                    <Accordion.Header>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                    </Accordion.Header>

                    <tbody>
                        {schedules.map((schedule, index) => (
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>                 
                                    <tr key={ schedule.id }>
                                    <td>{ index + 1 }</td>
                                    <td>{ schedule.userID }</td>
                                    <td>{ schedule.title }</td>
                                    <td>{ schedule.description}</td>
                                    <td><Link to={`/edit/${schedule.id}`} className="button is-small is-info">Edit</Link>
                                    <button onClick={ () => deleteSchedule(schedule.id) } className="button is-small is-danger">Delete</button></td>
                                    </tr>
                                </Accordion.Header>
                                <Accordion.Body>

                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                        <Accordion.Item>
                            <Accordion.Header>
                                <Link to="/add" className="button is-primary mt-2">+ Add New Schedule</Link>
                            </Accordion.Header>
                        </Accordion.Item>
                    </tbody>
                </table>
            </Accordion>


        </div>
    )
}
 
export default ScheduleList