import { useState } from "react";

//// This data does not depend on anything inside component, and it should live outside of it, since each time the component is executed this data will be created again
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  // Note: All the react function that start with 'use' are called hook. We can only call hooks on the top level of the function
  //// Setter function update value, but it does not mutate variable.
  const [step, setStep] = useState(1);
  const [isOpen, setOpen] = useState(true);
  // const [test, setTest] = useState({ name: "Pourya" });

  function handlePrevious() {
    // Note: The correct way of updating a state is use a call-back function
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);

    //// Bad Practice, It actually works, but we need to avoid it
    // test.name = "Farhad";
    // console.log(test.name);
    // setTest({ name: "Fred" });
  }

  function handleClose() {
    setOpen(!isOpen);
    setStep(1);
  }

  return (
    <>
      <button className="close" onClick={handleClose}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              onClick={handlePrevious}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
