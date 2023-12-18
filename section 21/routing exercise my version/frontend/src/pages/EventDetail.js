import { useParams } from "react-router";

function EventDetailPage() {
  const params = useParams();
  return <h1>Event Detail Page - {params.id}</h1>;
}

export default EventDetailPage;
