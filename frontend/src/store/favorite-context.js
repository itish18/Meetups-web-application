import { createContext, useState } from "react";

const FavoriteContext = createContext({
  favorite: [],
  totalFavorites: 0,
  addToFavorite: (id) => {},
  removeFromFavorite: (id) => {},
});

export const FavoriteContextProvider = (props) => {
  const [userFavorite, setFavorite] = useState([]);

  const addToFavoriteHandler = async (id) => {
    const response = await fetch("http://localhost:3001/favorites", {
      method: "POST",
      body: JSON.stringify(id),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resData = await response.json;
    return resData;
  };

  const removeFromFavoriteHandler = (id) => {
    setFavorite((prevFav) => {
      return prevFav.filter((fav) => fav.id !== id);
    });
  };

  const context = {
    favorite: userFavorite,
    totalFavorites: userFavorite.length,
    addToFavorite: addToFavoriteHandler,
    removeFromFavorite: removeFromFavoriteHandler,
  };

  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContext;
