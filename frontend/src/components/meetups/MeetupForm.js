import Card from "../ui/Card";
import classes from "./MeetupForm.module.css";
import { useHistory } from "react-router-dom";
import { useRef } from "react";

const MeetupForm = (props) => {
  const history = useHistory();

  const nameInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    let enteredName = nameInputRef.current.value;
    let enteredImage = imageInputRef.current.value;
    let enteredAddress = addressInputRef.current.value;
    let enteredDescription = descriptionInputRef.current.value;

    const newMeetupData = {
      title: enteredName,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddData(newMeetupData);

    enteredAddress = "";
    enteredDescription = "";
    enteredImage = "";
    enteredName = "";

    history.replace("/");
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input id="name" required typeof="text" ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image url</label>
          <input id="image" required typeof="url" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input id="address" required typeof="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default MeetupForm;
