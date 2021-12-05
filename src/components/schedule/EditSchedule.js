/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate , useParams } from 'react-router-dom';
 
const EditSchedule = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
 
    const updateSchedule = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/schedules/${id}`,{
            title: title,
        });
        navigate('/');
    }
 
    useEffect(() => {
        getScheduleById();
    }, []);
 
  
    const getScheduleById = (event) => {
        var url = `http://localhost:5000/schedules/${id}`
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
                    console.log('Schedule failed to update')
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
            <form onSubmit={ updateSchedule }>
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
 
export default EditSchedule