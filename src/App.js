import { Route, Switch } from "react-router-dom";

// pages
import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import FavoritesMeetups from "./pages/Favorites";

// components
import Layout from "./components/layouts/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetups />
        </Route>
        <Route path="/new-meetup">
          <NewMeetup />
        </Route>
        <Route path="/favorite-meetups">
          <FavoritesMeetups />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
