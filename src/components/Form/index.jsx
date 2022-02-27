import {useState, useEffect} from 'react'
import { uid } from 'uid';

const initialFormValues = {content: '', id: uid(), completed: false}

function Form({toDo, setTodos}) {
	const [formTodo, setFormTodo] = useState(initialFormValues)

	const onChangeInput = (e) => {
		setFormTodo({...formTodo, [e.target.name]: e.target.value});
	};

	useEffect(() => {
		setFormTodo(initialFormValues);
	}, [toDo])

	const onSubmit = (e) => {
		e.preventDefault();

		if(formTodo.content === ''){
			return false;
		}else{
			formTodo.id = uid()
			setTodos([...toDo, formTodo])
			console.log(formTodo.id)
		}

	}

  return (
    <header className="header">
		<h1>ToDos</h1>
		<form onSubmit={onSubmit}>
			<input 
			className="new-todo"
			name="content"
			onChange={onChangeInput}
			value={formTodo.content}
			placeholder="What needs to be done?" 
			autoFocus/>
		</form>
	</header>
  )
}

export default Form;