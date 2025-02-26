import { createContext, useState } from "react";

import { Data } from './data.js'

export const WeekContext = createContext({
    week: '',
    handleChange: () => { }
})

export default function WeekContextProvider({ children }) {
    const [week, setWeek] = useState(Data[0]);

    function handleChange(weekSelector) {
        const selectedWeek = Data.find(item => item.week === weekSelector);
        if (selectedWeek) {
            setWeek(selectedWeek)
        }
    }

    const weekCtx = {
        week: week,
        handleChange: handleChange
    }

    return <WeekContext.Provider value={weekCtx}>{children}</WeekContext.Provider>
}