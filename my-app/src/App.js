import React, {useState} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Homepage from './components/Homepage';
import DeleteTodo from './components/DeleteTodo';
import './App.css';
import Navbar from './components/NavBar';
import Todos from './components/Todos';



function App() {
  const [todos, setTodos] = useState([]);
  return (
    <BrowserRouter>
       <Navbar />
          <Routes>
        
              <Route path='/' element={<Homepage/>} />
              <Route path='/todos' element={<Todos todos={todos} setTodos={setTodos} />} />
              



          </Routes>
    
    
      </BrowserRouter>
  );
}

export default App;
