const { MongoClient, ServerApiVersion } = require("mongodb");
const URI = 'mongodb+srv://didierbalam:didier12345@serverlessinstance0.dobv8.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(URI,
    {
        useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1
    })


let dbConnection;

module.exports = {
    connectToServer: function (callback) {
        client.connect((err, db) => {
            if (err || !db) {
                return callback(err);
            }
            dbConnection = db.db("hexa")
            console.log("Successfully connected to MongoDB.");

            return callback();
        });
    },

    getDb: function () {
        return dbConnection;
    },
};
