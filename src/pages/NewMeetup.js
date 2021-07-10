import { useHistory } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

// db link
import DB_LINK from "../db/db-address";

function NewMeetup() {
  const history = useHistory();

  async function addMeetupHandler(meetupData) {
    try {
      const response = await fetch(DB_LINK,
        {
          method: "POST",
          body: JSON.stringify(meetupData),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      if ( !response.ok ) {
        throw Error(response.text)
      }
      history.replace('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section>
      <h1>Add new Meetup</h1>
      <NewMeetupForm onAddMeetup={ addMeetupHandler } />
    </section>
  )
}

export default NewMeetup;