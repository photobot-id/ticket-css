import { useEffect, useState } from 'react';
import './App.css'
import Classic from "./Classic";
import Sleek from './Sleek';
import Professional from './Professional';
import Chic from './Chic';
import Bold from './Bold';
import Playful from './Playful';

function App() {
  const [settings, setSettings] = useState();
  const [eventData, setEventData] = useState();
  useEffect(() => {
    const handleMessage = (e) => {
      if (e.message.data.source === "ticket-editor-page") {
        setSettings(e.message.data.settings);
        setEventData(e.message.data.eventData);
      }
      // React will hear the message forwarded by the loader script above
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);
  return (
    <div style={{  height:"100vh", width: "100vw" }}>
      <div className="preview-container">
        <div className="preview-wrapper">
          <div style={{transform: `scale(0.52)`}}>
            <div style={{
              "--papyrus-height": "1123px",
              "--papyrus-width": "794px",
              backgroundColor: "#FFFFFF"}}>
              <div className="main-container">
                {/* <Classic /> */}
                {/* <Sleek /> */}
                {/* <Professional /> */}
                {/* <Chic /> */}
                {/* <Bold /> */}
                {/* <Playful /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
