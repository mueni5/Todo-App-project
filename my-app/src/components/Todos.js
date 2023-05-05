import React from "react";



    function Todos ({ todos }){

        return (
            <div>
                <h2>Todos:</h2>
                <ul>
                 {todos.map(todo => (
              <li key={todo.id}>
                <h3>{todo.title}</h3>
                <p>Category: {todo.category}</p>
                <p>Completed: {todo.completed ? "Yes" : "No"}</p>
              </li>
            ))}
          </ul>
            </div>
        )
    }

    
export default Todos;
