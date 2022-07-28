const { MongoClient } = require("mongodb");
// const client = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true })

// let dbConnection;

module.exports = {
    // connectToServer: function (callback) {
    //     client.connect((err, db) => {
    //         if (err || !db) {
    //             return callback(err);
    //         }
    //         dbConnection = db.db("hexa")
    //         console.log("Successfully connected to MongoDB.");

    //         return callback();
    //     });
    // },

    getDb: async function () {
        const URI = process.env.ATLAS_URI

        const opts = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        let client = new MongoClient(URI, opts);
        await client.connect();
        let db = client.db('hexa');
        
        return { 
            client: client,
            db_connect: db
        }
    },
}
