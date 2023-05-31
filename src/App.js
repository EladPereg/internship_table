import { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';
import Add from './components/Add';

function App() {

  const [myHours, setMyHours] = useState([
    // { day: 'שני', date: '29/05', hoursNumber: '6.20', else: '' },
    // { day: 'שלישי', date: '30/05', hoursNumber: '6', else: '' },
    // { day: 'רביעי', date: '31/05', hoursNumber: '5.10', else: '' },
  ])

  const addToMyHours = (day, date, hoursNumber, Else) => {
    setMyHours([...myHours, { day, date, hoursNumber, Else }])
  }

const [flag,setFlag] = useState(false)

  useEffect(()=>{
    fetch('http://localhost:4500/houres')
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      setMyHours(data)
    })
  },[flag])




  return (
    <div className="App">
      <Table myHours={myHours}   />
      <Add addToMyHours={addToMyHours} setFlag={setFlag} flag={flag}/>
    </div>
  );
}

export default App;
