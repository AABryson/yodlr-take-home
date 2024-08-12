import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


function Home () {
    return (
        <div className='homeContainer'>
            <h1 className='homeTitle'>Yodler Design Challenge</h1>
            <Link to='/register' className='link'>Register</Link>
            <Link to='/admin' className='link'>Admin</Link>

            
        </div>
    )
}

export default Home;