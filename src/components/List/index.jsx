import React from 'react'

function List({toDo, setTodos }) {

    const removeTodo=(id) => {
        const filtered = toDo.filter(item => item.id !== id)
        setTodos(filtered)
    };

    function toggleComplete(id) {
        let updatedTodos = [...toDo].map((toDo) => {
          if (toDo.id === id) {
            toDo.completed = !toDo.completed;
          }
          return toDo;
        });
        setTodos(updatedTodos);
    }
    

  return (
    <section className="main">
    <input className="toggle-all" type="checkbox"/>
    <label htmlFor="toggle-all">
        Mark all as complete
    </label>

    <ul className="todo-list">
        {toDo.map((toDo) => 
        <li key={toDo.id} onClick={() => toggleComplete(toDo.id)} className={toDo.completed ? "completed" : ""}>
            <div className="view">
                <input className="toggle" type="checkbox"/>
                <label>{toDo.content}</label>
                <button className="destroy" onClick={() => removeTodo(toDo.id)}></button>
            </div>
        </li>
        )}
    </ul>
    </section>
  )
}

export default List;