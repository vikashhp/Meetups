import "./App.css";
import AllMeetup from "./pages/AllMeetup";
import NewMeetup from "./pages/NewMeetup";
import Favourites from "./pages/Favourites";
import { Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetup />
        </Route>

        <Route path="/new">
          <NewMeetup />
        </Route>

        <Route path="/fav">
          <Favourites />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
