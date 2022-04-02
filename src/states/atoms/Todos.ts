import {Todo} from "../../models/Todo";
import {v4 as uuid} from "uuid";
import {atom, useRecoilValue, useSetRecoilState} from "recoil";
import AtomKeys from "../recoilKeys";

type UseTodoMethodsType = {
    addTodo: (task: string) => void
    deleteTodo: (id: string) => void
    completeTodo: (id: string) => void
}

export const todosAtom = atom<Todo[]>({
    key: AtomKeys.TODO,
    default: []
})

type UseTodos = () => Todo[]
type UseTodoMethods = () => UseTodoMethodsType

export const useTodos: UseTodos = () => {
    return  useRecoilValue(todosAtom)
}

export const useTodoMethods: UseTodoMethods = () => {
    const setTodos = useSetRecoilState(todosAtom)

    const addTodo = (task: string) => {
        const todo: Todo = {
            id: uuid(),
            task,
            isComplete: false
        }
        // setTodos([...todos, todo])
        setTodos((currentTodos) => [...currentTodos, todo]) //最新の状態に対して更新処理
    }

    const deleteTodo = (id: string) => {
        // const newTodos = todos.filter(todo => todo.id !== id)
        // setTodos(newTodos)
        setTodos((currentTodos) => currentTodos.filter(todo => todo.id !== id)) //最新の状態に対して更新処理
    }

    const completeTodo = (id: string) => {
        setTodos((currentTodos) => {
            const index = currentTodos.findIndex((todo) => todo.id === id)
            const todo = currentTodos[index]
            const newValue = {...todo, isComplete: true}
            return [...currentTodos.slice(0, index), newValue, ...currentTodos.slice(index + 1)];
        })
    }

    return {addTodo, deleteTodo, completeTodo}
}
