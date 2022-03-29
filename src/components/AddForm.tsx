import {ChangeEvent, FormEvent, useState} from 'react'
import {Box, Button, FormControl, FormLabel, Heading, Input} from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons";
import {useTodos} from "../states/Todo";

const AddForm = () => {
    const [text, setText] = useState<string>("")
    const {addTodo} = useTodos()

    const submitForm = (event: FormEvent) => {
        event.preventDefault()
        addTodo(text)
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
