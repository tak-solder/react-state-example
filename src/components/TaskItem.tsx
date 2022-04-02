import {Box, Button} from "@chakra-ui/react";
import {CheckIcon, DeleteIcon} from "@chakra-ui/icons";
import {Todo} from "../models/Todo";
import {useTodoMethods} from "../states/atoms/Todos";

export type TaskListProps = {
    todo: Todo
}

const TaskItem = ({todo: {id, task, isComplete}} :TaskListProps) => {
    const {deleteTodo, completeTodo} = useTodoMethods()

    const onDelete = () => {
        deleteTodo(id)
    }
    const onComplete = () => {
        completeTodo(id)
    }

    return (
        <Box key={id} w={"50rem"} bg={isComplete ? 'lightgray' : 'white'} rounded="md" mb={"2rem"} p={4} shadow="lg">
            <Box mb="0.5rem">
                {task}
            </Box>
            <Button leftIcon={<DeleteIcon/>} colorScheme="red" size="xs" onClick={onDelete}>
                タスク削除
            </Button>
            {
                !isComplete && (
                    <Button leftIcon={<CheckIcon/>} colorScheme="blue" size="xs" onClick={onComplete}>
                        タスク完了
                    </Button>
                )
            }
        </Box>
    );
}

export default TaskItem
