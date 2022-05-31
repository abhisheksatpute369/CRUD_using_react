import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
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
      <Router>
        <Routes>
          <Route path='/'  element={<Users />} />
          <Route path='/user'  element={<User />} />
          <Route path='/Edituser'  element={<Edituser />} />
          <Route path='/Adduser'  element={<Adduser />} />        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
