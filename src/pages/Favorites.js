import { useContext } from 'react';

import MeetupList from '../components/meetups/MeetupList';

import FavoritesContext from '../store/favorites-context';

function FavoritesMeetups() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet.</p>
  } else {
    content = <MeetupList meetups={ favoritesCtx.favorites }/>
  }
  
  return (
    <section>
      <h1>My Favorites</h1>
      { content }
    </section>
  )
}

export default FavoritesMeetups;