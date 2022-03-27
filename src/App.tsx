import {FormEvent, useState} from 'react'
import {Box, Button, Container, FormControl, FormLabel, Heading, Input} from "@chakra-ui/react";
import {AddIcon, DeleteIcon} from "@chakra-ui/icons";
import {v4 as uuid} from "uuid";

type Todo = {
    id: string
    task: string
}

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [text, setText] = useState<string>("")

    const submitForm = (event: FormEvent) => {
        event.preventDefault()
        addTodo(text)
        setText("")
    }

    const addTodo = (task: string) => {
        const todo: Todo = {
            id: uuid(),
            task
        }
        setTodos([...todos, todo])
    }

    const deleteTodo = (id: string) => {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }

    return (
        <Container>
            <Box mt={"2rem"} mb={"6rem"} mx="auto">
                <Heading as="h1" size="lg" fontWeight="bold">
                    タスク追加
                </Heading>
                <Box mt={8}>
                    <form onSubmit={submitForm}>
                        <FormControl mb={"1rem"}>
                            <FormLabel htmlFor='task'>タスク</FormLabel>
                            <Input id='task' type='text' value={text} onChange={e => setText(e.target.value)} />
                        </FormControl>
                        <Button leftIcon={<AddIcon/>} colorScheme="blue" type="submit">
                            タスク追加
                        </Button>
                    </form>
                </Box>
            </Box>
            <Box mb={"6rem"} mx="auto">
                <Heading as="h1" size="lg" fontWeight="bold">
                    タスク一覧
                </Heading>
                <Box mt={8}>
                    {todos.map(({task, id}) => (
                        <Box key={id} w={"50rem"} bg="white" rounded="md" mb={"2rem"} p={4} shadow="lg">
                            <Box mb="0.5rem">
                                {task}
                            </Box>
                            <Button leftIcon={<DeleteIcon/>} colorScheme="red" size="xs" onClick={_ => deleteTodo(id)}>
                                タスク削除
                            </Button>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Container>
    );
}

export default App
