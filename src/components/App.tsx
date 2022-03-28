import {useState} from 'react'
import {Container} from "@chakra-ui/react";
import {AddTodo, DeleteTodo, Todo} from "../models/Todo";
import AddForm from "./AddForm";
import TaskList from "./TaskList";
import {v4 as uuid} from "uuid";

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo: AddTodo = (task: string) => {
        const todo: Todo = {
            id: uuid(),
            task
        }
        setTodos([...todos, todo])
    }

    const deleteTodo: DeleteTodo = (id: string) => {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }

    return (
        <Container>
            <AddForm addTodo={addTodo} />
            <TaskList todos={todos} deleteTodo={deleteTodo} />
        </Container>
    );
}

export default App
