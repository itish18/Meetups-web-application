import { Route, Switch } from "react-router-dom";

import Layout from "./components/layouts/Layout";

import AllMeetup from "./pages/AllMeetup";
import NewMeetup from "./pages/NewMeetup";
import FavoriteMeetups from "./pages/FavoriteMeetups";

import "./App.css";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetup />
        </Route>
        <Route path="/new-meetup">
          <NewMeetup />
        </Route>
        <Route path="/favorite">
          <FavoriteMeetups />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
