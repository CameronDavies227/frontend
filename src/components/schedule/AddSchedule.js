import { useState } from 'react'
import axios from "axios";
import { useNavigate  } from 'react-router-dom';
 


const AddSchedule = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    let navigate = useNavigate();

    const saveSchedule = (event) => {
        event.preventDefault();
        //var UID = (window.localStorage.getItem(UID))
        var userID = 1
        var url = "http://localhost:5000/schedules/createSchedule"
        fetch(url, 
            {
                method: 'POST', 
                body: JSON.stringify(
                    {userID: userID,
                    title:title, 
                    description:description}),
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        )
        .then (
            function (headers) {
                if (headers.status === 500) {
                    console.log('New schedule failed to be added')
                    navigate('/')
                    return
                }
                if (headers.status === 200) {
                    console.log('New scehdule added')
                    return
                }
            }
        );
    }
 
    return (
        <div>
            <form  onSubmit={saveSchedule}>
                <div className="field">
                    <label className="label">Title</label>
                    <input 
                        className="input"
                        name="title"
                        type="text"
                        placeholder="Title"
                        value={ title }
                        onChange={ (e) => setTitle(e.target.value) }
                        required
                    />
                </div>
 
                <div className="field">
                    <label className="label">Description</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Description"
                        name="description"
                        value={ description }
                        onChange={ (e) => setDescription(e.target.value) }
                        required
                    />
                </div>
 
                <div className="field">
                    <button className="button is-primary">Save</button>
                </div>
            </form>
        </div>
    )
}
 
export default AddSchedule