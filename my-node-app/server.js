const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static(path.join(__dirname, 'pages')));
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect('mongodb+srv://Samsunguser:0tddxGSOsHXadjLn@cluster0.w1z0c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB Atlas');
}).catch((error) => {
    console.error('Error connecting to MongoDB Atlas', error);
});

// Define the schema for the data
const promoterSchema = new mongoose.Schema({
    shortText: String,
    longText: String
});

const PromoterData = mongoose.model('PromoterData', promoterSchema);

// Route to handle form submission
app.post('/submit-promoter', (req, res) => {
    const promoterData = new PromoterData({
        shortText: req.body.shortText,
        longText: req.body.longText
    });

    promoterData.save()
        .then(() => res.send('Data saved successfully'))
        .catch(err => res.status(400).send('Error saving data'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
