import React, { useState } from 'react'

export default function Add(props) {
    const [day, setDay] = useState('')
    const [date, setDate] = useState('')
    const [hour, setHour] = useState('')

    const add = async () => {
        const obj={
            day:day,
            date:date,
            hoursNumber:hour
        }

        await fetch('http://localhost:4500/houres',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(obj)
        })
        props.setFlag(!props.flag)
    }

    return (
        <div>
            <input onChange={(e) => { setDay(e.target.value) }} type='text' placeholder='day' /> <br />
            <input onChange={(e) => { setDate(e.target.value) }} type='text' placeholder='date' /> <br />
            <input onChange={(e) => { setHour(e.target.value) }} type='text' placeholder='hour numbers' /> <br />
            <button onClick={() => { add()}}>ADD</button>
        </div>
    )
}
