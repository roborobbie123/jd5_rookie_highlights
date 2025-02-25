import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Data } from '../data';

export default function Dropdown({ onChange }) {
    return (
        <section id="dropdown">
            <div>
            <FontAwesomeIcon icon="fa-solid fa-wand-magic" />
                <label className="mx-2"><FontAwesomeIcon icon="fa-solid fa-wand-magic" />Select Week </label>
                <select onChange={(e) => onChange(e.target.value)}>
                    {Data.map((week) => <option key={week.week} value={week.week}>{week.week}</option>)}
                </select>
            </div>
        </section>
    );
}