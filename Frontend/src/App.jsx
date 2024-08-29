import React from 'react'
import Home from './Home/Home';
import { Route, Routes } from "react-router-dom"
import Courses from './courses/Courses';
import Signup1 from './components/Signup1';

function App() {
  return (
  <>
  
  <div className="dark:bg-slate-900 dark:text-white">
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/course" element={<Courses/>}/>
    <Route path="/signup1" element={<Signup1/>}/>
    
   
  </Routes>
  </div>
  </>
  );
}

export default App;
