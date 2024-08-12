import React from 'react';
import Register from './register';
import Admin from './Admin';
import Home from './Home';
import User from './User';
import {BrowserRouter, Routes, Route} from 'react-router-dom';



function App () {

    return (
        <div style={{display: 'flex', width:'100%'}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/register' element={<Register />}  />
                    <Route path='/admin' element={<Admin />}  />
                    <Route path='/' element={<Home />} />
                    <Route path='/user/:id' element={<User />} />
                </Routes>
            </BrowserRouter>
        </div>
    





    )

}

export default App;