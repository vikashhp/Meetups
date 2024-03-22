import React from "react";
import Card from "../UI/Card";
import classes from "./MeetupForm.module.css";
import { useRef } from "react";

const NewMeetupsForm = (props) => {
    
    const meetupsTitle = useRef();
    const meetupsImage = useRef();
    const meetupsAddress = useRef();
    const meetupsDescription = useRef();
  




    const submitHandler=(e)=>{
      e.preventDefault();

      const EnteredTitle=meetupsTitle.current.value;
      const EnteredImage=meetupsImage.current.value;
      const EnteredAddress=meetupsAddress.current.value;
      const EnteredDescription=meetupsDescription.current.value;

      const meetupsData={
        title:EnteredTitle,
        image:EnteredImage,
        address:EnteredAddress,
        des:EnteredDescription
      }

    //   console.log(meetupsData)
       props.onAddMeetup(meetupsData)
      
    }




  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">MeetUp Title</label>
          <input type="text" required id="title" ref={meetupsTitle}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">MeetUp Image</label>
          <input type="url" required id="image" ref={meetupsImage}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">MeetUp Address</label>
          <input type="text" required id="address"  ref={meetupsAddress}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">MeetUp Description</label>
          <textarea id="description" required rows="5" ref={meetupsDescription}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add MeetUps</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupsForm;
