import { useState } from "react";
import CounterButton from "./CounterButton";
import Card from "../UI/Card";
import "./Counter.css";
import SuccessMessage from "./SuccessMessage";

export default function Counter() {
  const [counter, counterFunc] = useState(0);
  const [random, setRandom] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [attempt, setAttempt] = useState(1);

  function incrementMainClicked(by) {
    if (counter + by === random) {
      setShowMessage(true);
      setMessage("Great Job!! You Won.");
      generateRandom(10, 100);
      setAttempt(1);
      return;
    }
    if (counter + by >= 100 || counter + by >= random) {
      setShowMessage(true);
      setMessage("You have reached max allowed!! ");
      setAttempt((prevState) => prevState + 1);
      return;
    }

    counterFunc(counter + by);
  }

  function resetButtonClicked() {
    counterFunc(0);
  }

  const closeMessage = () => {
    setShowMessage(false);
    setMessage("");
    counterFunc(0);
  };

  function generateRandom(min, max) {
    const primeNumber = [
      11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79,
      83, 89, 97,
    ];
    min = Math.ceil(min);
    max = Math.floor(max);
    let genratedNumber = 11;
    console.log(!(primeNumber.indexOf(+genratedNumber) === -1));
    while (!(primeNumber.indexOf(genratedNumber) === -1)) {
      genratedNumber = Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
    }
    setRandom(genratedNumber);
    counterFunc(0);
  }
  return (
    <Card className="counter">
      {showMessage && (
        <SuccessMessage message={message} hideCart={closeMessage} />
      )}
      <h2>Attempt: {attempt}</h2>
      <div className="wrapper">
        <div className="random">{random}</div>
      </div>
      <div className="wrapper">
        <span className="count">{counter}</span>
      </div>
      <div>
        <CounterButton by={2} incrementMainClicked={incrementMainClicked} />
        <CounterButton by={3} incrementMainClicked={incrementMainClicked} />
        <CounterButton by={4} incrementMainClicked={incrementMainClicked} />
        <CounterButton by={5} incrementMainClicked={incrementMainClicked} />
        <CounterButton by={6} incrementMainClicked={incrementMainClicked} />
        <CounterButton by={7} incrementMainClicked={incrementMainClicked} />
        <CounterButton by={8} incrementMainClicked={incrementMainClicked} />
        <CounterButton by={9} incrementMainClicked={incrementMainClicked} />
        <CounterButton by={10} incrementMainClicked={incrementMainClicked} />
      </div>
      <div>
        <button className="resetButton" onClick={resetButtonClicked}>
          Reset
        </button>
        <button className="tryAgain" onClick={() => generateRandom(10, 100)}>
          Next Number
        </button>
      </div>
    </Card>
  );
}
