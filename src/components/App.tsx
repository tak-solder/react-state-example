import {Container} from "@chakra-ui/react";
import AddForm from "./AddForm";
import TaskList from "./TaskList";

function App() {
    return (
        <Container>
            <AddForm />
            <TaskList />
        </Container>
    );
}

export default App
