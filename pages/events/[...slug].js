import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";

import Eventlist from "../../components/events/event-list";

function filteredEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center"> Loading... </p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numMonth) ||
    isNaN(numYear) ||
    numYear > 2030 ||
    numYear < 2020 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p> Invalid filter. Please adjust your values! </p>;
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p> No events found for the chosen filter! </p>;
  }

  return (
    <div>
      <Eventlist items={filteredEvents} />
    </div>
  );
}

export default filteredEventsPage;
