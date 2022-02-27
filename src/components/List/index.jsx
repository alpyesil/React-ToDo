import React from 'react'

function List({toDo, setTodos,activeTodos,completed ,all}) {

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
        <li key={toDo.id} className={toDo.completed ? "completed" : "active"}>
            <div className="view">
                <input className="toggle" type="checkbox" onClick={() => toggleComplete(toDo.id) }/>
                <label>{toDo.content}</label>
                <button className="destroy" onClick={() => removeTodo(toDo.id)}></button>
            </div>
        </li>
        )}
    </ul>

    <footer className="footer">
		<span className="todo-count">
			<strong>{toDo.length}</strong>
			items left
		</span>

		<ul className="filters">
			<li>
				<a className="selected" onClick={all}>All</a>
			</li>
			<li>
				<a onClick={activeTodos}> active</a>
			</li>
			<li>
				<a onClick={completed}>Completed</a>
			</li>
		</ul>

		<button className="clear-completed">
			Clear completed 
		</button>
	</footer>
    </section>
    
  )
}

export default List;