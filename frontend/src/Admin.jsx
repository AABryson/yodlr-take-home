import { useNavigate } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';

import './Admin.css'




function Admin () {
    let navigate = useNavigate();
    let baseURL = 'http://localhost:3000';
    let [users, setUsers] = useState([]);
    let [search, setSearch] = useState('');

    async function getAdmin() {
        let response = await axios.get(`${baseURL}/users`);
        console.log(response.data);
        setUsers(response.data);
    }

    useEffect(() => {
        getAdmin();
    }, [])

    function handleSearch(evt) {
        setSearch(evt.target.value)
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        navigate(`/user/${search}`)
        setSearch('');
    }

    async function handleClick(userID) {
        let response = await axios.delete(`${baseURL}/users/${userID}`);
        console.log('userID', userID)
        console.log(response.data)
        getAdmin();
    }

    return (
        <div className='adminContainer'>
            <div className='searchUser'>
                <label className='searchLabel' htmlFor='search'>Search by ID</label>
                <input className='searchInput' type='text' id='search' onChange={handleSearch}></input>
                <button className='searchButton' onClick={handleSubmit}>Search</button>
            </div>
            <ul className='ul'>
                {users.map(function(user){
                    return <li className='li'>
                        <h5 className='h5'>{user.firstName}</h5>
                        <h5 className='h5'>{user.lastName}</h5>
                        <h5 className='h5'>{user.email}</h5>
                        <button className='deleteButton' onClick={() => handleClick(user.id)}>Delete</button>
                    </li>
                })}
            </ul>
        </div>
    )






}

export default Admin;