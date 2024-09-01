import axios from 'axios';
import './App.css';
import { useState } from 'react';

function App() {
  const [firstNum, setFirstNum] = useState('');
  const [secondNum, setSecondNum] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const areNumbers = () => {
    const x = firstNum === '' ? 0 : parseFloat(firstNum);
    const y = secondNum === '' ? 0 : parseFloat(secondNum);

    if (isNaN(x) || isNaN(y)) {
      setError('The inputs must be numbers!');
      setResult(null);
      return false;
    }

    setError('');
    return true;
  };

  const add = () => {
    if (!areNumbers()) return;

    const x = firstNum === '' ? 0 : parseFloat(firstNum);
    const y = secondNum === '' ? 0 : parseFloat(secondNum);

    axios.post('http://localhost:8080/add',
      `firstNum=${x}&secondNum=${y}`,
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    )
    .then((response) => {
      setResult(response.data.result);
    })
    .catch((error) => {
      console.error(error);
    });
  };

  const subtract = () => {
    if (!areNumbers()) return;

    const x = firstNum === '' ? 0 : parseFloat(firstNum);
    const y = secondNum === '' ? 0 : parseFloat(secondNum);

    axios.post('http://localhost:8080/subtract',
      `firstNum=${x}&secondNum=${y}`,
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    )
    .then((response) => {
      setResult(response.data.result);
    })
    .catch((error) => {
      console.error(error);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          value={firstNum}
          onChange={(e) => setFirstNum(e.target.value)}
        />
        <input
          type="text"
          value={secondNum}
          onChange={(e) => setSecondNum(e.target.value)}
        />

        <button onClick={add}>Add</button>
        <button onClick={subtract}>Subtract</button>

        {error && <p style={{ color: 'red' }}>{error}</p>}
        {result !== null && <h2>Result: {result}</h2>}
      </header>
    </div>
  );
}

export default App;
