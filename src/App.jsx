import Input from "./components/Input";
import Header from "./components/Header";
import { useState } from "react";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  };

  return (
    <>
      <Header />
      <main>
        <Input onChange={handleChange} userInput={userInput} />
        {!inputIsValid && (
          <p className="center">Please enter a duration greater than 0</p>
        )}
        {inputIsValid && <Results userInput={userInput} />}
      </main>
    </>
  );
}

export default App;
