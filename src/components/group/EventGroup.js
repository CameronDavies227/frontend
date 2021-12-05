import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { Accordion } from 'react-bootstrap';
 
const groupList = () => {
    const [groups, setgroup] = useState([]);

    useEffect(() => {
        getgroups();
    }, []);
 
    const getgroups = () => {
        var url = `http://localhost:5000/groups/getAllgroups/`
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
        .then(data=>setgroup(data))
        .catch(error => console.error(error));
    }
 
    const deletegroup = (id) => {
        var url = `http://localhost:5000/groups/deletegroup/${id}`
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
        getgroups();
    }



 
    return (
        <div>
                <Accordion defaultActiveKey="0">
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
                        {groups.map((group, index) => (
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>                 
                                    <tr key={ group.id }>
                                    <td>{ index + 1 }</td>
                                    <td>{ group.userID }</td>
                                    <td>{ group.title }</td>
                                    <td>{ group.description}</td>
                                    <td><Link to={`/edit/${group.id}`} className="button is-small is-info">Edit</Link>
                                    <button onClick={ () => deletegroup(group.id) } className="button is-small is-danger">Delete</button></td>
                                    </tr>
                                </Accordion.Header>
                                <Accordion.Body>

                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                        <Accordion.Item>
                            <Accordion.Header>
                                <Link to="/add" className="button is-primary mt-2">+ Add New group</Link>
                            </Accordion.Header>
                        </Accordion.Item>
                    </tbody>
                </table>
            </Accordion>


        </div>
    )
}
 
export default groupList