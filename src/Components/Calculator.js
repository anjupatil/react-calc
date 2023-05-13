import React,{useState} from "react";
import './Calculator.css';



const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [success,setSuccess] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddition = () => {
    if (validateInput()) {
      const sum = parseFloat(num1) + parseFloat(num2);
      setResult(sum.toString());
      setSuccess("Your result is shown above");
      setErrorMessage('');
    }
  };

  const handleSubtraction = () => {
    if (validateInput()) {
      const difference = parseFloat(num1) - parseFloat(num2);
      setResult(difference.toString());
      setSuccess("Your result is shown above");
      setErrorMessage('');
    }
  };

  const handleMultiplication = () => {
    if (validateInput()) {
      const product = parseFloat(num1) * parseFloat(num2);
      setResult(product.toString());
      setSuccess("Your result is shown above");
      setErrorMessage('');
    }
  };

  const handleDivision = () => {
    if (validateInput()) {
      if (parseFloat(num2) === 0) {
        setErrorMessage('Error: Division by zero');
        setResult('');
        setSuccess('');
      } else {
        const quotient = parseFloat(num1) / parseFloat(num2);
        setResult(quotient.toString());
        setSuccess("Your result is shown above");
        setErrorMessage('');
      }
    }
  };

  const validateInput = () => {
    if(num1 === ''&& num2 === ''){
         setErrorMessage('Error: Enter two numbers');
         setResult('');
         setSuccess('');
         return false;
   
       }
    else if (num1 === '') {
      setErrorMessage('Error: Num 1 cannot be empty');
      setResult('');
      setSuccess('');
      return false;
    }
    else if(num2 === ''){
      setErrorMessage('Error: Num 2 cannot be empty');
      setResult('');
      setSuccess('');
      return false;

    }

    const numberRegex = /^-?\d*\.?\d*$/;
    if (!numberRegex.test(num1) || !numberRegex.test(num2)) {
      setErrorMessage('Error: Please enter valid numbers');
      setResult('');
      setSuccess('');
      return false;
    }

    return true;
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input type="text" placeholder="Num 1" value={num1} onChange={e => setNum1(e.target.value)} />
      <input type="text" placeholder="Num 2" value={num2} onChange={e => setNum2(e.target.value)} />
      <div className="btns">

      <button onClick={handleAddition}>+</button>
      <button onClick={handleSubtraction}>-</button>
      <button onClick={handleMultiplication}>*</button>
      <button onClick={handleDivision}>/</button>
      </div>

      {errorMessage && <div className="error">{errorMessage}</div>}
      {result && <div className="success">Result: {result}</div>}
      {success && <div className="success">{success}</div>}
    </div>
  );
};

export default Calculator;
