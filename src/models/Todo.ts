export type Todo = {
    id: string
    task: string
}


export type AddTodo = (task: string) => void
export type DeleteTodo = (id: string) => void
