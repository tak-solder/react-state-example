import React from "react";
import {Todo} from "../models/Todo";
import {v4 as uuid} from "uuid";
import {atom, useAtom} from "jotai";

type UseTodosType = {
    todos: Todo[]
    addTodo: (task: string) => void
    deleteTodo: (id: string) => void
}

const todosAtom = atom<Todo[]>([])

type UseTodos = () => UseTodosType

export const useTodos: UseTodos = () => {
    const [todos, setTodos] = useAtom(todosAtom)

    const addTodo = (task: string) => {
        const todo: Todo = {
            id: uuid(),
            task
        }
        // setTodos([...todos, todo])
        setTodos((currentTodos) => [...currentTodos, todo]) //最新の状態に対して更新処理
    }

    const deleteTodo = (id: string) => {
        // const newTodos = todos.filter(todo => todo.id !== id)
        // setTodos(newTodos)
        setTodos((currentTodos) => currentTodos.filter(todo => todo.id !== id)) //最新の状態に対して更新処理
    }

    return {todos, addTodo, deleteTodo}
}
