import {useState} from 'react'
import {Container} from "@chakra-ui/react";
import {Todo} from "../models/Todo";
import AddForm from "./AddForm";
import TaskList from "./TaskList";

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    return (
        <Container>
            <AddForm todos={todos} setTodos={setTodos} />
            <TaskList todos={todos} setTodos={setTodos} />
        </Container>
    );
}

export default App
