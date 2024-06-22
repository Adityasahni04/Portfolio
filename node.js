const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); 
const app = express();
const nodemailer=require('nodemailer')
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

app.use(express.urlencoded({ extended: true })); 

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});
require('dotenv').config();
// Route to handle form submission
app.post("/submit-form", async (req, res) => {
    try {
        const {fullName, email, message} = req.body;
        const data = {
            FullName: fullName,
            Email: email,
            Message: message,
        };

        // Set up nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail', // e.g., 'gmail'
            auth: {
                user: process.env.email, // Your Gmail email address
                pass: process.env.pass, // Your Gmail password or app password
            }
        });

        // Define mail options
        const mailOptions = {
            from:process.env.email,
            to: 'aditya123sahniaz@gmail.com',
            subject: 'New Form Submission',
            text: `You have a new form submission:\n\n${JSON.stringify(data, null, 2)}`
        };

        // Send email
        await transporter.sendMail(mailOptions);

        console.log("Email sent successfully");
        res.sendFile(path.join(__dirname, "datasaved.html"));

    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).send("An error occurred while processing your request.");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
