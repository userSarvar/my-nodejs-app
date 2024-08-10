const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

// Create Express app
const app = express();

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://Samsunguser:0tddxGSOsHXadjLn@cluster0.w1z0c.mongodb.net/SamsungDjizzakh', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB Atlas');
}).catch((error) => {
    console.error('Error connecting to MongoDB Atlas', error);
});

// Serve static files
app.use(express.static(path.join(__dirname, 'Samsung - Djizzakh')));

// Add routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Samsung - Djizzakh', 'index.html'));
});

app.get('/promoter', (req, res) => {
    res.sendFile(path.join(__dirname, 'Samsung - Djizzakh', 'promoter.html'));
});

// Define a schema and model for your data
const promoterSchema = new mongoose.Schema({
    shortText: String,
    longText: String,
});

const Promoter = mongoose.model('Promoter', promoterSchema);

// Handle form submission
app.post('/submit-promoter', (req, res) => {
    const { shortText, longText } = req.body;

    const newPromoter = new Promoter({
        shortText,
        longText,
    });

    newPromoter.save()
        .then(() => {
            res.status(200).json({ message: 'Data saved successfully!' });
        })
        .catch((error) => {
            res.status(500).json({ message: 'Failed to save data.', error });
        });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
