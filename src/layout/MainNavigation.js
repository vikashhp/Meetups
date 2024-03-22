import React from "react";
import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';
import { useContext } from "react";
import FavContext from "../store/fav-context";


const MainNavigation = () => {

  const favCtx = useContext(FavContext)



  return (
    <header className={classes.header}>
      <div className={classes.logo}>React MeetUps</div>
      <nav>
        <ul>
          <li>
            <Link to="/">AllMeetup Page</Link>
          </li>
          <li>
            <Link to="/new">Add NewMeetup Page</Link>
          </li>
          <li>
            <Link to="/fav">Favourites Page
            <span className={classes.badge}>{favCtx.totalFav}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
