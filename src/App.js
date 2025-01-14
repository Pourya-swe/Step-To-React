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
    // Note: The correct way of updating a state is to use a call-back function
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    // Note: Setting state based on the current state.
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
      <Button className="close" onClick={handleClose}>
        &times;
      </Button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step === 1 ? "active" : ""}>1</div>
            <div className={step === 2 ? "active" : ""}>2</div>
            <div className={step === 3 ? "active" : ""}>3</div>
          </div>
          <Message step={step} messages={messages} />
          <div className="buttons">
            <Button onClick={handlePrevious} bgColor="#7950f2" textColor="#fff">
              <span>👈</span>Previous
            </Button>

            <Button onClick={handleNext} bgColor="#7950f2" textColor="#fff">
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ textColor, bgColor, onClick, children, className }) {
  return (
    <button
      className={className ? className : ""}
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </button>
  );
}

function Message({ step, messages }) {
  return (
    <p className="message">
      Step {step}: {messages[step - 1]}
    </p>
  );
}

export default App;
