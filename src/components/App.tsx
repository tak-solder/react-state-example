import {Container} from "@chakra-ui/react";
import AddForm from "./AddForm";
import TaskList from "./TaskList";
import {TodoProvider} from "../states/Todo";

function App() {
    return (
        <TodoProvider>
            <Container>
                <AddForm />
                <TaskList />
            </Container>
        </TodoProvider>
    );
}

export default App
