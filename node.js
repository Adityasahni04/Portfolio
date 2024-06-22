const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); // Optional for older versions of Express
const Message=require('./schema/Mesaage')
const db=require('./database') // Assuming you missed this in your original code
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

app.use(express.urlencoded({ extended: true })); 

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Route to handle form submission
app.post("/submit-form", async(req, res) => {
    try {
        const data = req.body;
        const newMesaage=new Message(data);
        await newMesaage.save();
        console.log("saved")
        res.sendFile(path.join(__dirname, "datasaved.html"));

    } catch (error) {
        console.error("Error inserting data into the database:", err);
        return res.status(500).send("An error occurred while processing your request.");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
