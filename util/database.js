// const mongodb= require('mongodb');
// const MongoClient= mongodb.MongoClient;

// let _db;

// const mongoConnect= (callback)=> {
//   MongoClient.connect('mongodb+srv://hide:hide85x@cluster0-chy7b.mongodb.net/shop?retryWrites=true', { useNewUrlParser: true })
//     .then(client => {
//       callback()
//       console.log('connected!')
//       _db= client.db() // nasza baza do uzycia outside
//     })
//     .catch(err=> {
//       console.log(err);
//       throw err;
//     })

//   };

//   const getDb= ()=> {
//     if(_db){
//       return _db
//     }
//     throw ' no database was found';
//   };
  
// exports.mongoConnect= mongoConnect;
// exports.getDb= getDb;
// MONGO DB

//mongoose w app.js odpalamy 