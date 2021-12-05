import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
 
const EventList = () => {
    const [Events, setEvent] = useState([]);
 
    useEffect(() => {
        getEvents();
    }, []);
 
    const getEvents = () => {
        var url = "http://localhost:5000/Events/getAllEvents"
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
        .then(data=>setEvent(data))
        .catch(error => console.error(error));
    }
 
    const deleteEvent = (id) => {
        var url = `http://localhost:5000/Events/deleteEvent/${id}`
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
        getEvents();
    }

 
    return (
        <div>
            <Link to="/add" className="button is-primary mt-2">Add New</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { Events.map((Event, index) => (
                        <tr key={ index }>
                            <td>{ index + 1 }</td>
                            <td>{ Event.userID }</td>
                            <td>{ Event.title }</td>
                            <td>{ Event.description}</td>
                            <td>
                                <Link to={`/edit/${Event.id}`} className="button is-small is-info">Edit</Link>
                                <button onClick={ () => deleteEvent(Event.id) } className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )
}
 
export default EventList