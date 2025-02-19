import { useState } from 'react';
import { Data } from '../data';

export default function Dropdown({ onChange }) {
    return (
        <section id="dropdown">
            <div>
                <label className='mb-3'>Select Week</label>
                <select onChange={(e) => onChange(e.target.value)} className='form-select mb-3'>
                    {Data.map((week) => <option key={week.week} value={week.week}>{week.week}</option>)}

                </select>
            </div>
        </section>
    );
}