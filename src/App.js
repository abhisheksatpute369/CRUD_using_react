import React from 'react';
import './App.css';
import Adduser from './components/adduser';
import Edituser from './components/edituser';
import Navbar from './components/navbar';
import User from './components/user';
import Users from './components/users';

function App() {
  return (
    <div>
        <Navbar />
        <Users />
        <User />
        <Edituser />
        <Adduser />
    </div>
  );
}

export default App;
