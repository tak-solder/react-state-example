import {Container} from "@chakra-ui/react";
import AddForm from "./AddForm";
import TaskList from "./TaskList";
import {RecoilRoot} from "recoil";

function App() {
    return (
        <RecoilRoot>
            <Container>
                <AddForm />
                <TaskList />
            </Container>
        </RecoilRoot>
    );
}

export default App
