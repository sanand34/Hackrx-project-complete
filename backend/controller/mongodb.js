import mongodb from 'mongodb';
const Mongoclient = mongodb.MongoClient;
const dburl = 'mongodb://localhost:27017';

const mongoclient = useCases => {
  Mongoclient.connect(dburl, (err, db) => {
    if (err) {
      console.log('Unable to connect to the mongodb server.Error:', err);
    } else {
      useCases();
    }
  });
};

export {mongoclient, dburl};
