import React from 'react'

export default function Table(props) {

    const showTable = () => {
        return props.myHours.map((val) => {
            return <tr>
                {/* <td>{val.Else}</td> */}
                <td>{val.hoursNumber}</td>
                <td>{val.date}</td>
                <td>{val.day}</td>
            </tr>
        })
    }
    return (
        <div>
            <table>
                <tr>
                    {/* <th>אחר</th> */}
                    <th>מספר שעות</th>
                    <th>תאריך</th>
                    <th>יום</th>
                </tr>
                {showTable()}
            </table>
        </div>
    )
}
