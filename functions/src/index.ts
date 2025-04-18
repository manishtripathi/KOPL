/* eslint-disable */

import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import cors from "cors";
import {Resend} from "resend";

// Initialize CORS middleware
const corsHandler = cors({origin: true});

// Initialize Resend client
const resend = new Resend("YOUR_RESEND_API_KEY");

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}


export const sendContactEmail = onRequest((req, res) => {
  corsHandler(req, res, async () => {
    if (req.method !== "POST") {
      logger.warn(
        "Method not allowed:",
        req.method,
      );
      return res
        .status(405)
        .send("Method Not Allowed");
    }

    const {
      name,
      email,
      message,
    } = req.body as ContactFormData;

    if (!name || !email || !message) {
      logger.warn(
        "Missing required fields:",
        req.body,
      );
      return res.status(400).json({
        success: false,
        error:
          "All fields (name, email, message) are required.",
      });
    }

    try {
      const emailResponse: any =
        await resend.emails.send({
          from: "Your Company <no-reply@yourdomain.com>",
          to: ["your@email.com"],
          subject: `New Contact Form Submission from ${name}`,
          html: `
            <h2>New Contact Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
        });

      logger.info(
        "Email sent successfully:",
        emailResponse,
      );

      return res.status(200).json({
        success: true,
        message:
          "Contact form submitted and email sent.",
        id: emailResponse.id,
      });
    } catch (error: unknown) {
      const err = error as Error;
      logger.error("Error sending email:", err.message);

      return res.status(500).json({
        success: false,
        error: err.message || "Internal Server Error",
      });
    }
  });
});
