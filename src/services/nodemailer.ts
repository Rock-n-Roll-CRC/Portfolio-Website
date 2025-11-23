import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "in-v3.mailjet.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_API_KEY,
    pass: process.env.SMTP_SECRET_KEY,
  },
});

export default transporter;
