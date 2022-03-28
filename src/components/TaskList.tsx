import {Box, Heading} from "@chakra-ui/react";
import {DeleteTodo, Todo} from "../models/Todo";
import TaskItem from "./TaskItem";

export type TaskListProps = {
    todos: Todo[]
    deleteTodo: DeleteTodo
}

const TaskList = ({todos, deleteTodo}: TaskListProps) => {
    return (
        <Box mb={"6rem"} mx="auto">
            <Heading as="h1" size="lg" fontWeight="bold">
                タスク一覧
            </Heading>
            <Box mt={8}>
                {todos.map(todo => <TaskItem key={todo.id} todo={todo} deleteTodo={deleteTodo}/>)}
            </Box>
        </Box>
    )
}

export default TaskList
