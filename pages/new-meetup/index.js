// our-domain/new-meetup

import { useRouter } from 'next/router';
import Head from 'next/head';
import NewMeetUpForm from '../../components/meetups/NewMeetupForm';

function NewMeetUpPage() {
  const router = useRouter();

  const addMeetupHandler = async enteredMeetupData => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log('new-meetup-json', data);

    router.push('/');
  };

  return (
    <>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create networking opportunities."
        />
      </Head>
      <NewMeetUpForm onAddMeetup={addMeetupHandler} />
    </>
  );
}

export default NewMeetUpPage;
