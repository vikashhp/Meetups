import React from "react";
import FavContext from "../store/fav-context";
import { useContext } from "react";
import MeetupsList from "../meetups/MeetupsList";

const Favourites = () => {
  const favCtx = useContext(FavContext);

  let content;

  if (favCtx.totalFav === 0) {
    content = <h1>No Favourites Found</h1>;
  } else {
    content = <MeetupsList meetupsdata={favCtx.fav} />;
  }

  return (
    <div>
      <h1>Favourites</h1>
      {content}
    </div>
  );
};

export default Favourites;
