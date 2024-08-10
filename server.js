





const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect('mongodb+srv://Samsunguser:0tddxGSOsHXadjLn@cluster0.w1z0c.mongodb.net/yourDatabaseName', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB Atlas');
}).catch((error) => {
    console.error('Error connecting to MongoDB Atlas', error);
});

// Mongoose Schema and Model
const DataSchema = new mongoose.Schema({
    shortText: String,
    longText: String,
});

const Data = mongoose.model('Data', DataSchema);

// POST Route to handle form submission
app.post('/submit-form', (req, res) => {
    const { shortText, longText } = req.body;

    const newData = new Data({
        shortText: shortText,
        longText: longText,
    });

    newData.save()
        .then(() => res.send('Data saved successfully!'))
        .catch((err) => res.status(500).send('Error saving data: ' + err));
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
