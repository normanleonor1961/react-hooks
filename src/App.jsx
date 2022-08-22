
import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [name, setName] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    console.log("TESTING", inputRef.current);
    inputRef.current.focus();
  });

  return (
    <div className="App" style={{ padding: "100px"}}>
      <input 
        value={input} 
        onChange={(event) => {
        setInput(event.target.value);
      }} 
      style={{ height: '100px', width= "500px", fontSize '50px'}}
      ref={inputRef}
      />
      <h1>{input}</h1>
    </div>
  );
}

export default App;
