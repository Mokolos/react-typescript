import React from 'react';
import './App.css';
import Login from './components/login/login';
import { Routes, Route } from 'react-router-dom';
import Connected from './components/connected/connected';
import Home from './components/home/home';
import PrivateRoute from './components/privateRoute/privateRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route element={<PrivateRoute/>}>
          <Route path="/connected" element={<Connected/>}/> 
        </Route>
      </Routes>
    </div>
  );
}

export default App;
