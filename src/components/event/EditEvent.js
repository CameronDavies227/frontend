/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate , useParams } from 'react-router-dom';
 
const EditEvent = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
 
    const updateEvent = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/Events/${id}`,{
            title: title,
        });
        navigate('/');
    }
 
    useEffect(() => {
        getEventById();
    }, []);
 
  
    const getEventById = (event) => {
        var url = `http://localhost:5000/Events/${id}`
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
        .then (
            function (headers) {
                if (headers.status === 500) {
                    console.log('Event failed to update')
                    return
                }
                if (headers.status === 200) {
                    console.log('Scehdule Updated')
                    return
                }
            }
        );
    }
 
    return (
        <div>
            <form onSubmit={ updateEvent }>
                <div className="field">
                    <label className="label">Title</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Title"
                        value={ title }
                        onChange={ (e) => setTitle(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">Description</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Description"
                        value={ description }
                        onChange={ (e) => setDescription(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <button className="button is-primary">Update</button>
                </div>
            </form>
        </div>
    )
}
 
export default EditEvent