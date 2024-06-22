const nodemailer = require('nodemailer');
require('dotenv').config();

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed',
        };
    }

    try {
        const body = JSON.parse(event.body || '{}'); // Handle empty body gracefully
        const { fullName, email, message } = body;

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

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully' }),
        };

    } catch (error) {
        console.error("Error sending email:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'An error occurred while processing your request.' }),
        };
    }
};
