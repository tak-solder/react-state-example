import {atom, useRecoilState} from "recoil";
import AtomKeys from "../recoilKeys";
import Tab, {TabType} from "../../models/Tab";

type UseCurrentTabType = {
    currentTab: TabType
    setTab: (tab: TabType) => void
}

export const currentTabAtom = atom<TabType>({
    key: AtomKeys.TAB,
    default: Tab.ALL
})

type UseCurrentTab = () => UseCurrentTabType

export const useCurrentTab: UseCurrentTab = () => {
    const [currentTab, setCurrentTab] = useRecoilState(currentTabAtom)

    const setTab = (tab: TabType) => {
        setCurrentTab(tab)
    }

    return {currentTab, setTab}
}
