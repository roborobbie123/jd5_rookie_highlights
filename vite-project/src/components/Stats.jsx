export default function Stats({ pass_yd, pass_td, int, rush_yd, rush_td }) {
    return (
        <table className='table table-primary'>
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
                <td>{pass_yd}</td>
                <td>{pass_td}</td>
                <td>{int}</td>
                <td>{rush_yd}</td>
                <td>{rush_td}</td>
            </tbody>
        </table>
    );

}