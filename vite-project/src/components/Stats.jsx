import { Data } from '../data.js'
import { useState } from 'react';
import Dropdown from './Dropdown';
import Clip from './Clip.jsx';

export default function Stats() {
    const [selectedWeek, setSelectedWeek] = useState('');



    function theWeek(selectedWeek) {
        for (let i = 0; i < Data.length; i++) {
            if (Data[i].week === selectedWeek) {
                return Data[i];
            }
        }
        return null;
    }

    let week = theWeek(selectedWeek);
    if (!week) {
        week = Data[0].week;
    }


    return (
        <section id="stats">
            <Dropdown onChange={setSelectedWeek} />
            
                <table className='table table-dark table-striped table-hover'>
                    <thead>
                        <tr>
                            <th>Pass Yds</th>
                            <th>Pass Tds</th>
                            <th>Int</th>
                            <th>Rush Yds</th>
                            <th>Rush Tds</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{week.pass_yds}</td>
                            <td>{week.pass_td}</td>
                            <td>{week.int}</td>
                            <td>{week.rush_yds}</td>
                            <td>{week.rush_tds}</td>
                        </tr>
                    </tbody>
                </table>
                <Clip title={week.title} link={week.link}/> 
        </section>
    );

}