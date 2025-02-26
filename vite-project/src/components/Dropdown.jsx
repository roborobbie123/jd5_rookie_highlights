import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Data } from '../data';
import { useContext } from 'react';
import { WeekContext } from '../WeekContextProvider';

export default function Dropdown() {
    const weekCtx = useContext(WeekContext);
    return (
        <section id="dropdown">
            <div>
            <FontAwesomeIcon icon="fa-solid fa-wand-magic" />
                <label className="mx-2"><FontAwesomeIcon icon="fa-solid fa-wand-magic" />Select Week </label>
                <select className="hover:bg-stone-500" onChange={(e) => weekCtx.handleChange(e.target.value)}>
                    {Data.map((week) => <option key={week.week} value={week.week}>{week.week}</option>)}
                </select>
            </div>
        </section>
    );
}