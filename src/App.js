import { useEffect, useRef, useState } from "react"

function App() {
  const [count, setCount] = useState(60)
  const timerId = useRef()
  const prevCount = useRef()
  const h1Ref = useRef()
  useEffect(() => {
    prevCount.current = count
  }, [count])
  useEffect(() => {
    console.log(h1Ref.current);
  })
  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount(prevCount => prevCount - 1)
    }, 1000)
    console.log('Start -> ', timerId.current);
  }
  const handleStop = () => {
    clearInterval(timerId.current)
    console.log('Stop -> ', timerId.current);
  }
  console.log(count, prevCount.current);
  return (
    <div style={{ padding: 32 }}>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default App;
