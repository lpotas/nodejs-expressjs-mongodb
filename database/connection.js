import mongoose from 'mongoose';

const dbURI = 'mongodb://localhost/items';
let db;

mongoose.connect(dbURI);
db = mongoose.connection;

// CONNECTION EVENTS
// When successfully connected
db.on('connected', () => {
    console.log('Mongoose default connection open to ' + dbURI);
});
// If the connection throws an error
db.on('error', (err) => {
    console.log('Mongoose default connection error: ' + err);
});
// When the connection is disconnected
db.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
});
// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', () => {
    db.close(() => {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});




























/*



// Bring Mongoose into the app

mongoose.Promise = bluebird;
// Build the connection string 
var dbURI = 'mongodb://localhost/prebid-configurator';

// Create the database connection 
mongoose.connect(dbURI, {
    useMongoClient: true, //sprawdzić czemu trzeba tego użyć
});

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
    //   var dbiURIWithoutPassword = dbURI.substring(45)
    //   console.log('Mongoose default connection open to ' + dbiURIWithoutPassword);
    console.log('Mongoose default connection open to ' + dbURI);
});
// If the connection throws an error
mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});
// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});
*/