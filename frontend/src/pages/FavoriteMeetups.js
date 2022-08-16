import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import AddMeetupContext from "../store/addMeetup-context";

const FavoriteMeetups = () => {
  const newMeetupCtx = useContext(AddMeetupContext);
  return (
    <section>
      <h1>Favorite Meetups</h1>
      <MeetupList items={newMeetupCtx.favorite} />
    </section>
  );
};

export default FavoriteMeetups;
