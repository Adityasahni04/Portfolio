const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); // Optional for older versions of Express
const mysql = require('mysql'); // Assuming you missed this in your original code
const app = express();
const PORT = process.env.PORT || 3000;

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "aditya2004",
    database: "message"
});

// Middleware to serve static files (first.js, first.css)
app.use(express.static(path.join(__dirname)));

// Middleware to parse the body of POST requests
app.use(express.urlencoded({ extended: true })); // Use this if using Express 4.16.0+
// app.use(bodyParser.urlencoded({ extended: true })); // Use this if using older versions of Express

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "first.html"));
});

// Route to handle form submission
app.post("/submit-form", (req, res) => {
    const { fullname, email, message } = req.body;

    // Here you can handle the form data, e.g., insert it into the database
    const query = "INSERT INTO messages (fullname, email, message) VALUES (?, ?, ?)";
    connection.query(query, [fullname, email, message], (err, results) => {
        if (err) {
            console.error("Error inserting data into the database:", err);
            return res.status(500).send("An error occurred while processing your request.");
        }
        res.send("Form submitted successfully!");
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
