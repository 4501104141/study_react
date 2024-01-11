import { useRef } from "react";
import Video from './Video'
function App() {
  const videoRef = useRef()
  const handlePlay = () => {
    videoRef.current.play()
    // videoRef.current.remove()
  }
  const handlePause = () => {
    videoRef.current.pause()
  }
  return (
    <div style={{ padding: 32 }}>
      <Video ref={videoRef} />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}

export default App;
