import React from "react";
import classes from "./MeetupsList.module.css";
import MeetupsItem from "./MeetupsItem";

const MeetupsList = (props) => {
  return (
    <li className={classes.list}>
      {props.meetupsdata.map((item) => (
        <MeetupsItem
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          address={item.address}
          description={item.description}
        />
      ))}
    </li>
  );
};

export default MeetupsList;
