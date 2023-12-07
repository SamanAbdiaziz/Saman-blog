// server.js

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const fs = require('fs');
const path = require('path');


const app = express();
app.use(express.json());
app.use(cors());


// Serve db.json content
app.get('/db.json', (req, res) => {
  const dbFilePath = path.join(__dirname, 'path_to_db.json'); // Update with your db.json file path
  fs.readFile(dbFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading db.json:', err);
      res.status(500).send('Error reading db.json');
      return;
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

// Define a POST endpoint to receive email data
app.post("/sendEmail", (req, res) => {
  const { user_name, user_email, message } = req.body; // Adjust property names

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "farhanadam394@gmail.com",
      pass: "hccn hxnr hmem tlpd",
    },
  });

  // Create email payload
  const mailOptions = {
    from: "your-email@gmail.com",
    to: "farhanadam394@gmail.com",
    subject: "New Contact Form Submission",
    text: `Name: ${user_name}\nEmail: ${user_email}\nMessage: ${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error: Unable to send email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
