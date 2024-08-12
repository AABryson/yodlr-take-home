import React from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './register.css'


function Register() {
    let baseURL = 'http://localhost:3000'
    let navigate = useNavigate();

    let [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: ''
    })

    let handleChange = function(evt) {
        const {name, value} = evt.target
        //###################################################
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
        
    let handleSubmit = async function(evt) {
        evt.preventDefault();
        const {email, firstName, lastName} = formData;
        let response = await axios.post(`${baseURL}/users`, formData)
        console.log(response.data)
        setFormData({
            email: '',
            firstName: '',
            lastName: ''
        })
        navigate('/Admin');
    }


    return (
        <div className='registerContainer'>

            <h1 className='registerTitle'>Register</h1>

            <form onSubmit={handleSubmit} className='form'>
                <div className='row'>
                    <label htmlFor='email' className='label'>Email</label>
                    <input type='text' name='email' value={formData.email} onChange={handleChange} className='input'></input>
                </div>
                <div className='row'>
                    <label htmlFor='firstName' className='label'>First Name</label>
                    <input type='text' name='firstName' value={formData.firstName} onChange={handleChange} className='input'></input>
                </div>
                <div className='row'>
                    <label htmlFor='lastName' className='label'>Last Name</label>
                    <input type='text' name='lastName' value={formData.lastName} onChange={handleChange} className='input'></input>
                </div>
                <div className='row'>
                    <button type='submit' className='button'>Submit</button>
                </div>
            </form>
        </div>


    )
}

export default Register;