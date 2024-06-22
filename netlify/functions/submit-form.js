const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit-form", async (req, res) => {
    try {
        const { fullName, email, message } = req.body;

        // Set up nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            }
        });

        // Define mail options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'aditya123sahniaz@gmail.com',
            subject: 'New Form Submission',
            text: `You have a new form submission:\n\nFull Name: ${fullName}\nEmail: ${email}\nMessage: ${message}`
        };

        // Send email
        await transporter.sendMail(mailOptions);

        console.log("Email sent successfully");
        res.status(200).sendFile(path.join(__dirname, "datasaved.html"));

    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).send("An error occurred while processing your request.");
    }
});

module.exports = { handler: app };
