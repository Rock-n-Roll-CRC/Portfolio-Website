"use server";

import transporter from "@/services/nodemailer";

export async function sendMail({
  fullName,
  workEmail,
  message,
}: {
  fullName: string;
  workEmail: string;
  message: string;
}) {
  await transporter.sendMail({
    from: '"Dikhtyar.dev Contact Form" <danil.dikhtyar@gmail.com>',
    to: "danil.dikhtyar@gmail.com",
    subject: `New Contact Form Submission from ${fullName}`,
    text: `
        Full Name: ${fullName}
        Work Email: ${workEmail}

        Message:
        ${message}
      `,
    html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Work Email:</strong> ${workEmail}</p>

        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
  });
}
