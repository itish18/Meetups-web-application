import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoriteContext from "../../store/favorite-context";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const favoriteContext = useContext(FavoriteContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorite">
              Favorites
              <span className={classes.total}>
                {favoriteContext.totalFavorites}
              </span>
            </Link>
          </li>
          <li>
            <Link to="/new-meetup">Add Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
