import React from "react";
import classes from "./MeetupsItem.module.css";
import Card from "../UI/Card";
import { useContext } from "react";
import FavContext from "../store/fav-context";
const MeetupsItem = (props) => {
  const favCtx = useContext(FavContext);

  const itemIsfav = favCtx.itemIsFav(props.id);

  const toggleFavHandler = () => {
    if (itemIsfav) {
      favCtx.removeFav(props.id);
    } else {
      favCtx.addFav({
        id: props.id,
        image: props.image,
        title: props.title,
        address: props.address,
        description: props.description,
      });
    }
  };

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
          <button onClick={toggleFavHandler}>{itemIsfav ? 'Remove Item From Fav': 'Add Item To Fav'}</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupsItem;
