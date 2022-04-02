import {selector, useRecoilValue} from "recoil";
import RecoilKeys from "../recoilKeys";
import {Todo} from "../../models/Todo";
import {todosAtom} from "../atoms/Todos";
import {currentTabAtom} from "../atoms/CurrentTab";
import Tab from "../../models/Tab";

const filteredTodosAtom = selector<Todo[]>({
    key: RecoilKeys.FILTERED_TODO,
    get: ({get}) => {
        const todos = get(todosAtom)
        const tab = get(currentTabAtom)
        console.log("filteredTodosAtom")

        switch (tab) {
            case Tab.ALL:
                return todos

            case Tab.COMPLETED:
                return todos.filter(({isComplete}) => isComplete)

            case Tab.UNCOMPLETED:
                return todos.filter(({isComplete}) => !isComplete)
        }
    }
})

export const useFilteredTodos = (): Todo[] => {
    return useRecoilValue(filteredTodosAtom)
}
