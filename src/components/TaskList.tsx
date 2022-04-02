import {Box, Heading, Tab as TabUI, TabList, Tabs} from "@chakra-ui/react";
import TaskItem from "./TaskItem";
import Tab from "../models/Tab";
import {useCurrentTab} from "../states/atoms/CurrentTab";
import {useFilteredTodos} from "../states/selectors/FilteredTodos";

const tabs = [
    {
        text: "すべて",
        tab: Tab.ALL
    },
    {
        text: "未完了のみ",
        tab: Tab.UNCOMPLETED
    },
    {
        text: "完了済のみ",
        tab: Tab.COMPLETED
    }
]

const TaskList = () => {
    const todos = useFilteredTodos()
    const {currentTab, setTab} = useCurrentTab()
    const tabIndex = tabs.findIndex(({tab}) => tab === currentTab)

    console.log(`current tab: ${currentTab}`)

    const onTabSelect = (index: number) => {
        const newTab = tabs[index]
        setTab(newTab.tab)
    }

    return (
        <Box mb={"6rem"} mx="auto">
            <Heading as="h1" size="lg" fontWeight="bold">
                タスク一覧
            </Heading>
            <Tabs index={tabIndex} onChange={onTabSelect} variant='soft-rounded' mt="1rem">
                <TabList>
                    {tabs.map(({text, tab}) => <TabUI key={tab}>{text}</TabUI>)}
                </TabList>
            </Tabs>
            <Box mt={8}>
                {todos.map(todo => <TaskItem key={todo.id} todo={todo}/>)}
            </Box>
        </Box>
    )
}

export default TaskList
