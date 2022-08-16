import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";
import AddMeetupContext from "../../store/addMeetup-context";

import { useContext } from "react";

const MeetupList = (props) => {
  const newMeetupCtx = useContext(AddMeetupContext);

  let loading;
  if (newMeetupCtx.loading) {
    loading = (
      <div className={classes.loading}>
        <h3>Loading...</h3>
      </div>
    );
  } else {
    loading = null;
  }
  return (
    <ul className={classes.list}>
      {loading}
      {props.items.map((item) => {
        return (
          <MeetupItem
            key={item._id}
            id={item._id}
            title={item.title}
            image={item.image}
            address={item.address}
            description={item.description}
          />
        );
      })}
    </ul>
  );
};

export default MeetupList;
