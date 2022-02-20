import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';
import Footer from './components/Footer';
import { uid } from 'uid';

function App() {
  const [status, setStatus] = useState("All")

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


  useEffect(() => {
  
    console.log(toDo)
  }, [toDo])
  
  


  return (
    <section className="todoapp">
      <Form toDo={toDo} setTodos={setTodos}/>
      <List toDo={toDo} setTodos={setTodos}/>
      <Footer toDo={toDo}/>
    </section>
  );
}

export default App;
