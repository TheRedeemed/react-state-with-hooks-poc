import React, {useState} from 'react'
import uuid from 'uuid/v4'

const initialTodos = [
  {
    id: uuid(),
    task: 'Learn React',
    complete: true
  },
  {
    id: uuid(),
    task: 'Learn Firebase',
    complete: false
  },
  {
    id: uuid(),
    task: 'Learn GraphQL',
    complete: false
  }
];

function App() {
  const [todos, setTodos] = useState(initialTodos)
  const [task, setTask] = useState('')

  const handleChangeInput = event => setTask(event.target.value)

  const handleChangeCheckbox = id => setTodos(todos.map( todo => (todo.id === id) ? { ...todo, complete: !todo.complete } : todo ))


  const handleSubmit = event => {
    if (task) setTodos([...todos, {id: uuid(), task: task,complete: false}])
    setTask('')
    event.preventDefault()
  }

  return (
    <div>
      <ul>
        {
          todos.map(todo => (
            <li key={todo.id}>
              <label>
                <input
                  type='checkbox'
                  checked={todo.complete}
                  onChange={() => handleChangeCheckbox(todo.id)}
                />
                {todo.task}
              </label>
            </li>
          ))
        }
      </ul>    

      <form onSubmit={handleSubmit}>
        <input 
          type='text' 
          value={task} 
          onChange={handleChangeInput} 
        />
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  );
}

export default App;
