import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup (only POST requests to this route will trigger the code in the handler function)

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://usermongo:TtkZsr0cfcc6lLOx@cluster0.aq3kinh.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);
    client.close();

    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;
