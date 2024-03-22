import React from "react";
import NewMeetupsForm from "../meetups/NewMeetupsForm";
import { useHistory } from "react-router-dom";

const NewMeetup = () => {
  const history = useHistory()
  const meetupHandler = (meetupdata) => {
    fetch(
      "https://react-meetup-f5c73-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupdata),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(()=>{
      history.replace('/')
    })
   
  };

  return (
    <div>
      <h1>NewMeetup</h1>
      <NewMeetupsForm onAddMeetup={meetupHandler} />
    </div>
  );
};

export default NewMeetup;
