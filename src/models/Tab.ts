const Tab = {
    ALL: 1,
    UNCOMPLETED: 2,
    COMPLETED: 3,
} as const

export type TabType = typeof Tab[keyof typeof Tab]

export default Tab
