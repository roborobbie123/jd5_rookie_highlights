import { useContext } from "react";
import { WeekContext } from "../WeekContextProvider";

export default function Clip() {
    const weekCtx = useContext(WeekContext);

    return (
        <div>
            <h4>{weekCtx.week.title}</h4>
        <iframe className="hover:border-amber-400" width="560" height="315" src={weekCtx.week.link} frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
        </div>
    );
}