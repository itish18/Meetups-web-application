import MeetupList from "../components/meetups/MeetupList";
import AddMeetupContext from "../store/addMeetup-context";
import { useContext } from "react";

const AllMeetup = (props) => {
  const newMeetupCtx = useContext(AddMeetupContext);

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList items={newMeetupCtx.meetups} />
    </section>
  );
};

export default AllMeetup;
