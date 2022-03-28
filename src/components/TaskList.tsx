import {Box, Heading} from "@chakra-ui/react";
import {Todo} from "../models/Todo";
import TaskItem from "./TaskItem";

export type TaskListProps = {
    todos: Todo[]
    setTodos: (todos: Todo[]) => void
}

const TaskList = ({todos, setTodos}: TaskListProps) => {
    return (
        <Box mb={"6rem"} mx="auto">
            <Heading as="h1" size="lg" fontWeight="bold">
                タスク一覧
            </Heading>
            <Box mt={8}>
                {todos.map(todo => <TaskItem key={todo.id} todos={todos} todo={todo} setTodos={setTodos}/>)}
            </Box>
        </Box>
    )
}

export default TaskList
