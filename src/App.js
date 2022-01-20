import React, { useState } from 'react';
import './App.css';
import Buttons from './components/Buttons/Buttons';
import Table from './components/Table';



function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 })
  const [status, setStatus] = useState(0)
  const [interv, setInterv] = useState()
  
  const Start = () => {
    setInterv(setInterval(run, 10));
    setStatus(1);
  }
  const Stop = () => {
    clearInterval(interv)
    setStatus(2)
  }
  const Reset = () => {
    clearInterval(interv)
    setStatus(0)
    setTime({ ms: 0, s: 0, m: 0, h: 0 })

  }
  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;
  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };
  

  
  return (
    <div>
      <Table time={time} />
      <Buttons Reset={Reset} Stop={Stop} Start={Start} status={status} />
    </div>
  );
}

export default App;
