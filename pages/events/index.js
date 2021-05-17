import { getAllEvents } from "../../dummy-data";
import { useRouter } from "next/router";

import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import { Fragment } from "react";

function AllEvents() {
  const events = getAllEvents();
  const router = useRouter();

  function findEventshandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventSearch onSearch={findEventshandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEvents;
