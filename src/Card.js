import React, { useEffect, useState, useRef } from "react";

function Card() {
  const [weight, setWeight] = useState(0);
  const [feet, setFeet] = useState();
  const [inches, setInches] = useState();
  const [isCal, setIsCal] = useState(false);
  const inputEl = useRef(null);

  const height = feet * 0.3048 + inches * 0.0254;
  const BMI = (weight / (height * height)).toPrecision(4);
  console.log(BMI);
  function handleSubmit() {
    if (BMI > 0) {
      setIsCal(true);
    }
  }

  function handleReset() {
    setFeet();
    setInches();
    setWeight(0);
    setIsCal(false);
    inputEl.current.focus();
  }
  useEffect(function () {
    inputEl.current.focus();
  }, []);

  return (
    <div className="card">
      <h3>BMI Calculator</h3>

      <div className="weight">
        <label className="label">Weight(kg)</label>
        <input
          type="text"
          size={28}
          ref={inputEl}
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
        />
      </div>
      <div className="label">
        <label>Height(feet-inches)</label>
      </div>
      <div className="Height">
        <input
          type="text"
          placeholder="Feet"
          value={feet}
          onChange={(e) => setFeet(Number(e.target.value))}
        />
        <input
          type="text"
          size={15}
          placeholder="inches"
          value={inches}
          onChange={(e) => setInches(Number(e.target.value))}
        />
      </div>
      <button className="submit" onClick={handleSubmit}>
        Submit
      </button>
      <button onClick={handleReset}>Reload</button>
      {isCal && (
        <h4>
          <em>Your BMI is: {BMI}</em>
        </h4>
      )}

      {isCal && BMI <= 18.5 && <p>You are UnderWeight</p>}
      {isCal && BMI > 18.5 && BMI < 24.9 && <p>You have Normal Weight</p>}
      {isCal && BMI > 25 && BMI < 29.9 && <p>You are OverWeight</p>}
      {isCal && BMI >= 30 && <p>You have Obese</p>}
    </div>
  );
}

export default Card;
