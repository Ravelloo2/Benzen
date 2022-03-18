const mongoose = require('mongoose');

const uri = `mongodb+srv://mongomeron:mongomeron@cluster0.untda.mongodb.net/Cluster0`;

const options = {
 useNewUrlParser: true,
 useUnifiedTopology: true
}

mongoose.connect(uri, options).then(() => {
    console.log("Database connection established!");
    },
    err  => {
    {
    console.log("Error connecting Database instance due to:", err);
    }
    });