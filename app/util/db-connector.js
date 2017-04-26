var mongoose = require('mongoose');

function ConnectDatabase(connStr, cb) {

    mongoose.connect(connStr);

    var db = mongoose.connection;
    db.on('error', (err) => {
        console.log(`Error connecting to database ${err}`);
        if(cb) {
            cb(err);
        }
    });

    db.once('open', () => {
        console.log('Successfully connected to database...');
        if(cb) {
            cb();
        }
    });
}

module.exports = ConnectDatabase;
