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
  const [ticketType, setTicketType] = useState("classic");
  useEffect(() => {
    const handleMessage = (e) => {
      if (e.message.data.source === "ticket-editor-page") {
        setSettings(e.message.data.settings);
        setEventData(e.message.data.eventData);
        setTicketType(e.message.data.type);
      }
      // React will hear the message forwarded by the loader script above
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const renderTicket = () => {
    switch (ticketType) {
      case "sleek":
        return <Sleek eventData={eventData} settings={settings}/>;
      case "professional":
        return <Professional eventData={eventData} settings={settings}/>;
      case "chic":
        return <Chic eventData={eventData} settings={settings}/>;
      case "bold":
        return <Bold eventData={eventData} settings={settings}/>;
      case "playful":
        return <Playful eventData={eventData} settings={settings}/>;
      default:
        return <Classic eventData={eventData} settings={settings}/> ;
    }
  }

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
                {renderTicket()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
