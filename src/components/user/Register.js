import { useState } from 'react'
import axios from "axios";
import { useNavigate  } from 'react-router-dom';
 
const AddSchedule = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const navigate = useNavigate();
 
    /*const saveSchedule = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/schedules',{
            title: title,
            description: description
        });
        navigate('/');
    }*/

    function saveUser(evt){
        evt.preventDefault ();
        console.log(evt);
        var theFromData = {};
        for ( var i=0;i<evt.target.length;i++) {
            theFromData[evt.target[i].name] = 
                evt.target[i].value;
        }
        fetch(evt.target.action, 
            {
                method: 'POST', 
                body: JSON.stringify(theFromData),
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        .then (
            function (headers) {
                if (headers.status === 401) {
                    console.log('login failed')
                    window.localStorage.setItem('loggedin', 'false')
                    return
                }
                if (headers.status === 200) {
                    window.localStorage.setItem('loggedin', 'true')
                    console.log('login success')
                    console.log(window.localStorage.getItem('loggedin'))
                    return
                }
            }
        );
    }
 
    return (
        <div>
            <form method="post" action="/users/createSchedule" onSubmit="saveUser(evt)">
            <div className="field">
                    <label className="label">Username</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Username"
                        name="username"
                        required
                    />
                </div>
                
                <div className="field">
                    <label className="label">Email</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Email"
                        name="email"
                        required
                    />
                </div>

                <div className="field">
                    <label className="label">Title</label>
                    <input 
                        className="input"
                        name="title"
                        type="text"
                        placeholder="Title"
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
 
export default AddUser