import { useState } from "react";

const messageArr = [
  "Learn React ⚛️",
  "Apply for jobs ⚛️",
  "Invest your new income ⚛️",
];

function Step() {
  // let step = 3;
  // const arr = useState('string');
  // console.log(arr);

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  console.log(isOpen);

  function handlePrevious() {
    // step = step - 1;
    // if (step > 1) setStep(step - 1);

    // setStep((s) => s - 1);
    // setStep((s) => s - 1);

    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    // step = step - 1;
    // if (step < 3) setStep(step + 1);
    // setStep((s) => s + 1);
    // setStep((s) => s + 1);

    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <div>
      <button className="btn" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="container">
          <ul className="steps__container">
            <li className={`${step >= 1 ? "step active" : "step"}`}>1</li>
            <li className={`${step >= 2 ? "step active" : "step"}`}>2</li>
            <li className={`${step >= 3 ? "step active" : "step"}`}>3</li>
          </ul>

          <p className="step__message">{`Step ${step}: ${
            messageArr[step - 1]
          }`}</p>

          <div className="step__btns">
            <button onClick={handlePrevious} className="step__btn">
              Previous
            </button>
            <button onClick={() => handleNext()} className="step__btn">
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Step;

// export default Step
