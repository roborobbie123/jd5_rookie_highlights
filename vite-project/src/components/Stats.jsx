import { Data } from '../data.js'
import Clip from './Clip.jsx';

export default function Stats({ week }) {

    return (
        <section id="stats" className="my-5">
                <table className="w-full table-auto text-center">
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
        </section>
    );

}