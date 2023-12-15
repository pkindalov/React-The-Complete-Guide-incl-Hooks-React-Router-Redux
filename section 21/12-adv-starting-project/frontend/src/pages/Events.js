import { useEffect, useState } from "react";
import EventsList from "../components/EventsList";

function EventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      const response = await fetch("http://localhost:8080/events");
      const data = await response.json();
      setEvents(data.events);
    };

    getEvents();
  }, []);

  let content = "";
  if (events.length === 0) {
    content = <p>No events</p>;
    return;
  }

  return (
    <>
      <h1>Events Page</h1>
      {events && events.length > 0 && <EventsList events={events} />}
      <section>{content}</section>
    </>
  );
}

export default EventsPage;
