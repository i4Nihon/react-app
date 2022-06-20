import "./App.css";
import { useState } from "react";
import Title from './components/Title'
import Modal from "./components/Modal";
import Open from "./components/Open";
import EventList from "./components/EventList";

function App() {
  const [showModal, setShowModal] = useState(true)
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "bowser's live stream", id: 2 },
    { title: "race on moo moo farm", id: 3 },
  ]);

  console.log(showModal);
  const handleClick = (id) => {

    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
  };
  const handleClose = () => {

    setShowModal(false)
  }
  const handleOpen = () => {

    setShowModal(true)
  }
  const subtitle = "All the latest events in mario kingdom"


  return (
    <div className="App">

      <Title title="Events in Your Area" subtitle={subtitle}/>
      <Title title="another title" subtitle="another subtitle "/>
      {showEvents && (
        <div>
          <button
            onClick={() => {
              setShowEvents(false);
            }}
          >
            hide events
          </button>
        </div>
      )}

      {!showEvents && (
        <div>
          <button
            onClick={() => {
              setShowEvents(true);
            }}
          >
            show events
          </button>
        </div>
      )}

      { showEvents && <EventList events={events} handleClick={handleClick} /> }
      
      
      {showModal && <Modal handleClose ={handleClose} isSalesModal={false}>
        <h2>10% Off Cupon Code</h2>
        <p>Use asdadaasdasjasjiasd</p>
      </Modal>
      }
      
      {!showModal && <Open handleOpen={handleOpen}>
        <button onClick={handleOpen} className="Open">OPEN</button>
      </Open>
      }

    </div>
  );
}

export default App;
