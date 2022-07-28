// const client = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true })

// let dbConnection;
const mongo = require("mongodb");

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

        const URI = 'mongodb+srv://didierbalam:didier12345@serverlessinstance0.dobv8.mongodb.net/?retryWrites=true&w=majority'

        const opts = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        let client = new mongo.MongoClient(URI, opts);
        await client.connect();
        let db = client.db('hexa');

        return {
            client: client,
            db_connect: db
        }
    },
}
