// const { MongoClient } = require("mongodb");
// const URI = process.env.ATLAS_URI;

// const client = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true })

// let dbConnection;

// module.exports = {
//     connectToServer: function (callback) {
//         client.connect((err, db) => {
//             if (err || !db) {
//                 return callback(err);
//             }
//             dbConnection = db.db("hexa")
//             console.log("Successfully connected to MongoDB.");

//             return callback();
//         });
//     },

//     getDb: function () {
//         return dbConnection;
//     },
// };

const { MongoClient } = require('mongodb')

const MONGODB_URI = 'mongodb+srv://didierbalam:didier12345@serverlessinstance0.dobv8.mongodb.net/?retryWrites=true&w=majority';
const MONGODB_DB = 'hexa';


let cachedClient = null;
let cachedDb = null;

const connectToDatabase = async () => {
    // check the cached.
    if (cachedClient && cachedDb) {
        // load from cache
        return {
            client: cachedClient,
            db: cachedDb,
        };
    }

    // set the connection options
    const opts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    // Connect to cluster
    let client = new MongoClient(MONGODB_URI, opts);
    await client.connect();
    let db = client.db(MONGODB_DB);

    // set cache
    cachedClient = client;
    cachedDb = db;

    return {
        client: cachedClient,
        db_connect: cachedDb,
    };
}


module.exports = connectToDatabase