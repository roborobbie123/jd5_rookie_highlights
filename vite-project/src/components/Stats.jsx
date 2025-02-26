
import { useContext } from 'react';
import { WeekContext } from '../WeekContextProvider.jsx';

export default function Stats() {
    const weekCtx = useContext(WeekContext);

    return (
        <section id="stats" className="my-5">
                <table className="w-full table-auto text-center border border-collapse">
                    <thead>
                        <tr className="border">
                            <th>Pass Yds</th>
                            <th>Pass Tds</th>
                            <th>Int</th>
                            <th>Rush Yds</th>
                            <th>Rush Tds</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{weekCtx.week.pass_yds}</td>
                            <td>{weekCtx.week.pass_td}</td>
                            <td>{weekCtx.week.int}</td>
                            <td>{weekCtx.week.rush_yds}</td>
                            <td>{weekCtx.week.rush_tds}</td>
                        </tr>
                    </tbody>
                </table>
        </section>
    );

}