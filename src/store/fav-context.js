import { createContext } from "react";
import { useState } from "react";

const FavContext = createContext({
  fav: [],
  totalFav: 0,
  addFav: (favmeetup) => {},
  removeFav: (meetupId) => {},
  itemIsFav: (meetupId) => {},
});

export const FavContextProvider = (props) => {
  const [userFav, setUserFav] = useState([]);

  const addItemHandler = (favmeetup) => {
    setUserFav((prev) => {
      return prev.concat(favmeetup);
    });
  };

  const removeItemHandler = (meetupId) => {
    setUserFav((prev) => {
      return prev.filter((meetup) => meetup.id !== meetupId);
    });
  };

  const itemIsFavHandler = (meetupId) => {
    return userFav.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    fav: userFav,
    totalFav: userFav.length,
    addFav: addItemHandler,
    removeFav: removeItemHandler,
    itemIsFav: itemIsFavHandler,
  };

  return (
    <FavContext.Provider value={context}>{props.children}</FavContext.Provider>
  );
};

export default FavContext;
