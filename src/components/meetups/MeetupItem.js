import { useContext } from "react";

import Card from "../ui/Card";
import styles from "./MeetupItem.module.css";

import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const { id, image, title, address, description } = props.meetup;

  const itemIsFavorite = favoritesCtx.itemIsFavorite(id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(id);
    } else {
      favoritesCtx.addFavorite(props.meetup);
    }
  }

  return (
    <li className={styles.item}>
      <Card>
        <div className={ styles.image }>
          <img src={ image } alt={ title + ' image' } />
        </div>
        <div className={ styles.content }>
          <h3>{ title }</h3>
          <address>{ address }</address>
          <p>{ description }</p>
        </div>
        <div className={ styles.actions }>
          <button onClick={ toggleFavoriteStatusHandler }>{ itemIsFavorite ? 'Remove from Favorites' : 'To favorites' }</button>
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem;