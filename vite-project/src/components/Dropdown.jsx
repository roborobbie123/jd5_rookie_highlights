import { Data } from '../data';

export default function Dropdown({ onChange }) {
    return (
        <section id="dropdown">
            <div>
                <label>Select Week</label>
                <select onChange={(e) => onChange(e.target.value)}>
                    {Data.map((week) => <option key={week.week} value={week.week}>{week.week}</option>)}
                </select>
            </div>
        </section>
    );
}