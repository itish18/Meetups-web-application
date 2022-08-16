import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useContext } from "react";

import AddMeetupContext from "../../store/addMeetup-context";

const MeetupItem = (props) => {
  const newMeetupCtx = useContext(AddMeetupContext);

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={() => newMeetupCtx.addToFavorite({ id: props.id })}>
            Add
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
