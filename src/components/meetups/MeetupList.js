import MeetupItem from "./MeetupItem";

import styles from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={ styles.list }>
      { props.meetups.map((mtp) => <MeetupItem meetup={ mtp } />) }
    </ul>
  )
}

export default MeetupList;