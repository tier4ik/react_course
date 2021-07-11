import Card from "../ui/Card";

import styles from "./MeetupItem.module.css";

function MeetupItem(props) {
  const { image, title, address, description } = props.meetup;
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
          <button>To Favorites</button>
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem;