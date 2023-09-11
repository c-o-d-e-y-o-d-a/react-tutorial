import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import './App.css';
import { Main } from './pages/main';
import { Login } from './pages/login';
import { Navbar } from './components/Navbar';
import { MakePost } from './pages/makePost';

function App() {
  return (
    <>
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/makePost' element={<MakePost/>}/>


        </Routes>
      </Router>
       </div>
    
    </>
  );
}

export default App;
