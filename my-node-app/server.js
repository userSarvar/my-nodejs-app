const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://Samsunguser:0tddxGSOsHXadjLn@cluster0.w1z0c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB Atlas');
}).catch((error) => {
    console.error('Error connecting to MongoDB Atlas', error);
});

// Define a schema and model for the data
const DataSchema = new mongoose.Schema({
    shortText: String,
    longText: String,
});

const Data = mongoose.model('Data', DataSchema);

// Route to handle form submission
app.post('/submit', async (req, res) => {
    const { shortText, longText } = req.body;

    try {
        const newData = new Data({ shortText, longText });
        await newData.save();
        res.json({ success: true });
    } catch (error) {
        console.error('Error saving data to MongoDB:', error);
        res.json({ success: false });
    }
});

// Serve static files (your HTML, CSS, etc.)
app.use(express.static('SAMSUNG - DJIZZAKH/pages'));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
