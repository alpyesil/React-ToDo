import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';
import { uid } from 'uid';

function App() {  
  const [toDo, setTodos] = useState([
    {
      content: 'Learn JavaScript',
      id: uid(),
      completed: false
    },
    {
      content: 'Learn React',
      id: uid(),
      completed: false
    },
    {
      content: 'Learn Vue.js',
      id: uid(),
      completed: false
    },
  ]);

  //filtrelenmiş todolar
  const [filtered, setFiltered] = useState([])

  
  //tamamlanmamıs todoları listele ve gonder
  const activeTodos = () => {
    const filter = toDo.filter((item)=> !item.completed)
    setFiltered(filter)
  }
  //tamamlanmıs todoları listele ve gonder
  const completed = () => {
    const filter = toDo.filter((item)=> item.completed)
    setFiltered(filter)
  }
   // bütün todfoları listele
  const all = () => {
    setFiltered(toDo)
   }

  useEffect(() => {
    setFiltered(toDo)
  }, [toDo])
  
  

  return (
    <section className="todoapp">
      <Form toDo={toDo} setTodos={setTodos}/>
      <List toDo={filtered} setTodos={setTodos} activeTodos={activeTodos} completed={completed} all={all}/>
      
    </section>
  );
}

export default App;
