import { useState } from 'react';

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  const setValue = (value) => setCount(value);

  return { count, increment, decrement, reset, setValue };
};

export default useCounter;
