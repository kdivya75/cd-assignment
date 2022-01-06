import React from 'react';
import UserList from '../container/UsersList/UsersList';
import UserDetails from '../container/UserDetails';
import { Routes , Route } from 'react-router-dom';

function Routers () {
    return (
        <Routes>
        <Route exact path='/' element={<UserList />}  />
        <Route exact path='/user/:id' element={<UserDetails />}  />
     
      </Routes>

    )
}

export default Routers;