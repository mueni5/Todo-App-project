import React from 'react';
import axios from 'axios';

const DeleteTodo = ({ id, refreshTodos }) => {
  const deleteTodo = async () => {
    try {
      await axios.delete(`http://localhost:3000/tasks/${id}`);
      refreshTodos();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button onClick={deleteTodo}>
      Delete
    </button>
  );
};

export default DeleteTodo;
