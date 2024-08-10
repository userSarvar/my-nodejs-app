const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'pages' directory
app.use(express.static(path.join(__dirname, 'pagess')));

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://Samsunguser:0tddxGSOsHXadjLn@cluster0.w1z0c.mongodb.net/yourDatabaseName', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB Atlas');
}).catch((error) => {
    console.error('Error connecting to MongoDB Atlas', error);
});

// Define a schema and model for promoter data
const promoterSchema = new mongoose.Schema({
    shortText: String,
    longText: String,
});

const PromoterData = mongoose.model('PromoterData', promoterSchema);

// Route to handle form submissions
app.post('/submit-promoter', async (req, res) => {
    const { shortText, longText } = req.body;

    const newEntry = new PromoterData({
        shortText,
        longText,
    });

    try {
        await newEntry.save();
        res.send('Data submitted successfully!');
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).send('Failed to save data.');
    }
});

// Serve the index page at the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

// Serve the promoter page at '/promoter'
app.get('/promoter', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'promoter.html'));
});

// Set the port for the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
