import { useContext } from "react";

import MeetupForm from "../components/meetups/MeetupForm";
import AddMeetupContext from "../store/addMeetup-context";

const NewMeetup = () => {
  const newMeetupCtx = useContext(AddMeetupContext);

  return (
    <section>
      <h1>Add Meetup</h1>
      <MeetupForm onAddData={newMeetupCtx.sendMeetup} />
    </section>
  );
};

export default NewMeetup;
