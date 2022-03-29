import {Box, Heading} from "@chakra-ui/react";
import TaskItem from "./TaskItem";
import {useTodos} from "../states/Todo";

const TaskList = () => {
    const {todos} = useTodos()
    return (
        <Box mb={"6rem"} mx="auto">
            <Heading as="h1" size="lg" fontWeight="bold">
                タスク一覧
            </Heading>
            <Box mt={8}>
                {todos.map(todo => <TaskItem key={todo.id} todo={todo}/>)}
            </Box>
        </Box>
    )
}

export default TaskList
