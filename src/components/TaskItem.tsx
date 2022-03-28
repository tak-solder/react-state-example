import {Box, Button} from "@chakra-ui/react";
import {DeleteIcon} from "@chakra-ui/icons";
import {Todo} from "../models/Todo";

export type TaskListProps = {
    todo: Todo
    todos: Todo[]
    setTodos: (todos: Todo[]) => void
}

const TaskItem = ({todo: {id, task}, todos, setTodos}:TaskListProps) => {
    const deleteTodo = (id: string) => {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }

    return (
        <Box key={id} w={"50rem"} bg="white" rounded="md" mb={"2rem"} p={4} shadow="lg">
            <Box mb="0.5rem">
                {task}
            </Box>
            <Button leftIcon={<DeleteIcon/>} colorScheme="red" size="xs" onClick={_ => deleteTodo(id)}>
                タスク削除
            </Button>
        </Box>
    );
}

export default TaskItem
