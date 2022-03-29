import {Box, Button} from "@chakra-ui/react";
import {DeleteIcon} from "@chakra-ui/icons";
import {Todo} from "../models/Todo";
import {useTodos} from "../states/Todo";

export type TaskListProps = {
    todo: Todo
}

const TaskItem = ({todo: {id, task}} :TaskListProps) => {
    const {deleteTodo} = useTodos()

    const onClick = () => {
        deleteTodo(id)
    }

    return (
        <Box key={id} w={"50rem"} bg="white" rounded="md" mb={"2rem"} p={4} shadow="lg">
            <Box mb="0.5rem">
                {task}
            </Box>
            <Button leftIcon={<DeleteIcon/>} colorScheme="red" size="xs" onClick={onClick}>
                タスク削除
            </Button>
        </Box>
    );
}

export default TaskItem
