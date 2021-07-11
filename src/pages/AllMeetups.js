import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

// db link
import DB_LINK from "../db/db-address";

function AllMeetups() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    (async function getMeetups() {
      try {
        const response = await fetch(DB_LINK);
        if (!response.ok) {
          throw Error(response.text)
        }
        const data = await response.json();
        setLoadedMeetups(Object.keys(data).map(key => Object.assign(data[key], {id: key})));
      } catch (error) {
        console.log(error);
      }
    })();    
  }, []);

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={ loadedMeetups }/>
    </section>
  )
}

export default AllMeetups;