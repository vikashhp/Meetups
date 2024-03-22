import React from "react";
import MeetupsList from "../meetups/MeetupsList";
import { useState } from "react";
import { useEffect } from "react";
import classes from './AllMeetup.module.css'

const AllMeetup = () => {
  const [isLaoding, setIsLaoding] = useState(true);
  const [loadedMeetups, setLaodedMeetups] = useState([]);

  useEffect(() => {
    setIsLaoding(true);
    fetch("https://react-meetup-f5c73-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let meetups = [];

        for (let key in data) {
          let meet = {
            id: key,
            ...data[key],
          };
          meetups.push(meet);
        }

        //  console.log(data)

        setIsLaoding(false);
        setLaodedMeetups(meetups);
      });
  }, []);

  if (isLaoding) {
    return (
      <section className={classes.loader}>
        <img src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b952glqrrsgxvlqarkhbtn88em2cvf1b7n8lt2115e87&ep=v1_gifs_search&rid=200w.gif&ct=g"/>
      </section>
    );
  }

  return (
    <section>
      <h1>AllMeetup</h1>
      <MeetupsList meetupsdata={loadedMeetups} />
    </section>
  );
};

export default AllMeetup;
