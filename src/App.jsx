import { useState } from 'react'
import {
    BrowserRouter as Router,
    Routes, 
    Route,
} from "react-router-dom";
import './App.css'
import Nav from './Nav'
import Resume from './Resume';
import Employment from './Employment';
import Background from './Background';

function App() {
  return (
    <Router basename='https://pinak1392.github.io/React-Resume/'>
      <Background />
      < Nav />
      <Routes>
        <Route path='' element={<Resume/>}/>
        <Route path='/Resume' element={<Resume/>}/>
        <Route path='/Employment' element={<Employment/>}/>
      </Routes>

    </Router>
  )
}

export default App
