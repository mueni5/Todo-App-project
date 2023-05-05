import React, { useEffect, useState } from 'react';

function Homepage({todos, setTodos}) {
  
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch(error => console.log('error', error));
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTodo = {
      title,
      category,
      completed: false,
    };
    const response = await fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    });
    if (response.ok) {
      setTitle('');
      setCategory('');
      setTodos([...todos, newTodo]);
    }
  };
  const handleTitleChange = (e) =>{
    setTitle(e.target.value)
  }
  const handleCategoryChange = (e) =>{
    setCategory(e.target.value)
  }
  return (
    <div>
      <h2>Todo APP</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={handleCategoryChange}
          />
        </div>
        <button type="submit">Add Todo</button>
        <button type="submit">Delete</button>
      </form>
      </div>
  )
  }

  export default Homepage;
