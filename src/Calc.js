import React, { useState } from "react";

function Calc() {
  const [mort, setmort] = useState();
  let [ints, setints] = useState();
  let [years, setyears] = useState();
  let [total, settotal] = useState();

  function vals(event) {
    setmort(event.target.value);
  }

  function vals2(event) {
    setints(event.target.value);
  }

  function vals3(event) {
    setyears(event.target.value);
  }

  function run() {
    ints /= 100;
    years *= 12;
    let main = 1 + ints / 12;
    let main2 = 1 + ints / 12;
    const r = ints / 12;
    let main3 = Math.pow(main2, years);
    let main4 = Math.pow(main, years);
    const pow = main4 * r;
    const pow2 = main3 - 1;
    settotal(Math.floor((mort * (pow / pow2) * 100) / 100));
  }

  return (
    <div>
      <div className="mainbox">
        <div className="box">
          <h1>Mortgage Calculator</h1>
          <h5> Mortgage Amount</h5>
          <input onChange={vals} required></input>
          <h5> Interest rate(%) </h5>
          <input onChange={vals2} required></input>
          <h5> Mortgage period (years)</h5>
          <input onChange={vals3} required></input>
          <button onClick={run}>Calculate</button>
          <h2> {isNaN(total) ? " " : "Your monthly payment is $" + total}</h2>
        </div>
      </div>
    </div>
  );
}

export default Calc;
