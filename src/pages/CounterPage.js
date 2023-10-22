import React from 'react';
import useCounter from '../hooks/useCounter';

const CounterPage = () => {
  const { count, increment, decrement, reset, setValue } = useCounter();

  return (
    <div>
      <h2>Counter: {count}</h2>
       <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
     
    
      <input 
        type="number" 
        value={count} 
        onChange={(e) => setValue(Number(e.target.value))} 
      />
        <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CounterPage;