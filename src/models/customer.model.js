let mongoose = require('mongoose')

//const SERVER = 'elongo-bd-adlff.mongodb.net';
//const DATABASE = 'test';
//const USER = 'db_admin';
//const PASSWORD = '1MUJ9nwbZw5GwnqK';
//const OPTIONS = 'retryWrites=true&w=majority';


//mongoose.connect(`mongodb+srv://${USER}:${PASSWORD}@${SERVER}/${DATABASE}?${OPTIONS}`);

let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Customer', CustomerSchema);