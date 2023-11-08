import { useState } from "react";
import { useGetTodoByIdQuery, useGetTodosQuery } from "./store/apis/todosApi"

const TodoApp = () => {

  const [todoId, setTodoId] = useState(1);
  // const {data: todos = [], isLoading} = useGetTodosQuery();
  const {data: todo, isLoading} = useGetTodoByIdQuery(todoId);
  

  const nextTodo = () => {
    setTodoId(todoId + 1);
  }

  const prevTodo = () => {
    if(todoId === 1 ) return; 
    setTodoId(todoId - 1);
  }

  return (
    <div>
        <h1>Todos - RTK Query</h1>
        <hr />

        <h4>isLoading... {isLoading ? 'true' : 'false'}</h4>

        <pre>...</pre>

        {/* <ul>
          {todos.map((todo: any) => (
            <li key={todo.id}>
              <strong>{todo.completed ? 'DONE ' : 'Pending '}</strong>
              {todo.title}
            </li>
          ))}
        </ul> */}
        <pre>{JSON.stringify(todo)}</pre>

        <button onClick={nextTodo}>Next Todo</button>
        <button onClick={prevTodo}>Prev Todo</button>
    </div>
  )
}

export default TodoApp
