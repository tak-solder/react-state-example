import React, {useContext, useState} from "react";
import {Todo} from "../models/Todo";
import {v4 as uuid} from "uuid";

type TodoContextType = {
    todos: Todo[]
    addTodo: (task: string) => void
    deleteTodo: (id: string) => void
}

const TodoContext = React.createContext<TodoContextType>({
    todos: [],
    addTodo: _ => {},
    deleteTodo: _ => {},
});

type UseTodos = () => TodoContextType

export const useTodos: UseTodos = () => useContext(TodoContext)

export const TodoProvider: React.FC = ({children}) => {
    const [todos, setTodos] = useState<Todo[]>([])
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
        <TodoContext.Provider value={{todos, addTodo, deleteTodo}}>
            {children}
        </TodoContext.Provider>
    )
}
