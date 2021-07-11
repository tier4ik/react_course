import { useContext } from "react";
import { Link } from "react-router-dom";

import FavoritesContext from "../../store/favorites-context";

import styles from "./MainNavigation.module.css";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <header className={ styles.header }>
      <div className={ styles.logo }>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/favorite-meetups">Favorite Meetups <span className={ styles.badge }>{ favoritesCtx.totalFavorites }</span></Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation;