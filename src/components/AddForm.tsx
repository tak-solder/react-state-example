import {ChangeEvent, FormEvent, useState} from 'react'
import {Box, Button, FormControl, FormLabel, Heading, Input} from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons";
import {v4 as uuid} from "uuid";
import {Todo} from "../models/Todo";

export type AddFormProps = {
    todos: Todo[]
    setTodos: (todos: Todo[]) => void
}

const AddForm = ({todos, setTodos}: AddFormProps) => {
    const [text, setText] = useState<string>("")

    const submitForm = (event: FormEvent) => {
        event.preventDefault()
        const todo: Todo = {
            id: uuid(),
            task: text
        }
        setTodos([...todos, todo])
        setText("")
    }

    const updateTaskText = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)

    return (
        <Box mt={"2rem"} mb={"6rem"} mx="auto">
            <Heading as="h1" size="lg" fontWeight="bold">
                タスク追加
            </Heading>
            <Box mt={8}>
                <form onSubmit={submitForm}>
                    <FormControl mb={"1rem"}>
                        <FormLabel htmlFor='task'>タスク</FormLabel>
                        <Input id='task' type='text' value={text} onChange={updateTaskText} />
                    </FormControl>
                    <Button leftIcon={<AddIcon/>} colorScheme="blue" type="submit">
                        タスク追加
                    </Button>
                </form>
            </Box>
        </Box>
    )
}

export default AddForm
