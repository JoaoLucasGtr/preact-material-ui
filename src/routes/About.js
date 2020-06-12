import { useState } from 'preact/hooks';

const Abort = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(currentCount => currentCount - 1);

  return (
    <div>
      <h1>About</h1>
      <p>Counter: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
};

export default Abort;