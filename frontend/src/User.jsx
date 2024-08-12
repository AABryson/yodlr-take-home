import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios';


function User () {
    let params = useParams();
    let id = params.id;

    let [user, setUser] = useState({});

    let baseURL = 'http://localhost:3000'

    async function getUser(id) {
        let response = await axios.get(`${baseURL}/users/${id}`);
        console.log(response.data);
        setUser(response.data);
        return
    }

    useEffect(() => {
        getUser(id)
    }, [])

    return (
        <div>
            <h1>{user.firstName} {user.lastName}</h1>

            <h2>{user.email}</h2>
        </div>



    )
}

export default User;