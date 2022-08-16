import { createContext, useEffect, useState, useCallback } from "react";

const AddMeetupContext = createContext({
  meetups: [],
  favorite: [],
  loading: true,
  sendMeetup: (data) => {},
  loadMeetup: () => {},
  addToFavorite: (id) => {},
});

export const AddMeetupContextProvider = (props) => {
  const url = "http://localhost:3001/meetups";
  const [allMeetups, setMeetups] = useState([]);
  const [userFavorite, setFavorite] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadMeetupHandler = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const resData = await response.json();
      const meetArray = [];
      for (let key in resData) {
        const meetup = {
          id: key,
          ...resData[key],
        };
        meetArray.push(meetup);
      }
      setMeetups((prevMeetup) => {
        return prevMeetup.concat(meetArray);
      });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    loadMeetupHandler();
  }, [loadMeetupHandler]);

  const sendMeetupHandler = async (data) => {
    const response = await fetch("http://localhost:3001/meetups/add", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.reload();
    const resData = await response.json();

    return resData;
  };

  const addToFavoriteHandler = async (id) => {
    const response = await fetch("http://localhost:3001/meetups/favorites", {
      method: "POST",
      body: JSON.stringify(id),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resData = await response.json();
    return resData;
  };

  const context = {
    meetups: allMeetups,
    favorite: userFavorite,
    loading: loading,
    sendMeetup: sendMeetupHandler,
    loadMeetup: loadMeetupHandler,
    addToFavorite: addToFavoriteHandler,
  };

  return (
    <AddMeetupContext.Provider value={context}>
      {props.children}
    </AddMeetupContext.Provider>
  );
};

export default AddMeetupContext;
