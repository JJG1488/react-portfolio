// require("dotenv").config();

// const express = require("express");
// const axios = require("axios");
// const twilio = require("twilio");
// const { google } = require("googleapis");
// const { Client } = require("@microsoft/microsoft-graph-client");

// const app = express();
// app.use(express.json());

// const PORT = process.env.PORT || 5000;

// // TWILIO SETUP
// const twilioClient = twilio(
//   process.env.TWILIO_ACCOUNT_SID,
//   process.env.TWILIO_AUTH_TOKEN
// );

// // GOOGLE CALENDAR SETUP
// const googleOAuth2Client = new google.auth.OAuth2(
//   process.env.GOOGLE_CLIENT_ID,
//   process.env.GOOGLE_CLIENT_SECRET,
//   process.env.GOOGLE_REDIRECT_URI
// );

// // MICROSOFT OUTLOOK CALENDAR SETUP
// const microsoftAuthUrl =
//   "https://login.microsoftonline.com/common/oauth2/v2.0/authorize";

// // GET AVAILABLE TIME SLOTS FROM GOOGLE CALENDAR
// app.get("/api/availability/google", async (req, res) => {
//   try {
//     // googleOAuth2Client.setCredentials({
//     //   access_token: process.env.GOOGLE_ACCESS_TOKEN,
//     //   refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
//     // });
//     const oauth2Client = new google.auth.OAuth2(
//       process.env.GOOGLE_CLIENT_ID,
//       process.env.GOOGLE_CLIENT_SECRET,
//       "https://developers.google.com/oauthplayground"
//     );
//     oauth2Client.setCredentials({
//       access_token: process.env.GOOGLE_ACCESS_TOKEN,
//       refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
//     });

//     async function refreshAccessToken() {
//       try {
//         const { credentials } = await oauth2Client.refreshAccessToken();
//         console.log("New Access Token:", credentials.access_token);
//         process.env.GOOGLE_ACCESS_TOKEN = credentials.access_token;
//       } catch (error) {
//         console.error("Error refreshing access token:", error);
//       }
//     }

//     // Refresh token every 50 minutes
//     setInterval(refreshAccessToken, 50 * 60 * 1000);
//     const calendar = google.calendar({
//       version: "v3",
//       auth: googleOAuth2Client,
//     });

//     const response = await calendar.freebusy.query({
//       requestBody: {
//         timeMin: new Date().toISOString(),
//         timeMax: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
//         items: [{ id: process.env.GOOGLE_CALENDAR_ID }],
//       },
//     });

//     const busySlots =
//       response.data.calendars[process.env.GOOGLE_CALENDAR_ID].busy;
//     const availableSlots = generateAvailableTimeSlots(busySlots);
//     res.json({ availableSlots });
//   } catch (error) {
//     console.error("Google Calendar Error:", error);
//     res
//       .status(500)
//       .json({ error: "Failed to fetch availability from Google Calendar" });
//   }
// });

// // GET AVAILABLE TIME SLOTS FROM MICROSOFT OUTLOOK CALENDAR
// app.get("/api/availability/microsoft", async (req, res) => {
//   try {
//     const client = Client.init({
//       authProvider: (done) => done(null, process.env.MICROSOFT_ACCESS_TOKEN),
//     });

//     const response = await client
//       .api("/me/calendarview")
//       .header("Prefer", 'outlook.timezone="UTC"')
//       .query({
//         startDateTime: new Date().toISOString(),
//         endDateTime: new Date(
//           Date.now() + 7 * 24 * 60 * 60 * 1000
//         ).toISOString(),
//       })
//       .get();

//     const busySlots = response.value.map((event) => ({
//       start: event.start.dateTime,
//       end: event.end.dateTime,
//     }));
//     const availableSlots = generateAvailableTimeSlots(busySlots);
//     res.json({ availableSlots });
//   } catch (error) {
//     console.error("Microsoft Calendar Error:", error);
//     res
//       .status(500)
//       .json({ error: "Failed to fetch availability from Microsoft Calendar" });
//   }
// });

// // BOOK APPOINTMENT & SEND CONFIRMATION MESSAGE
// app.post("/api/schedule", async (req, res) => {
//   const { date, time, name, email, phone, calendarType } = req.body;

//   try {
//     let response;
//     if (calendarType === "google") {
//       googleOAuth2Client.setCredentials({
//         access_token: process.env.GOOGLE_ACCESS_TOKEN,
//       });
//       const calendar = google.calendar({
//         version: "v3",
//         auth: googleOAuth2Client,
//       });

//       response = await calendar.events.insert({
//         calendarId: process.env.GOOGLE_CALENDAR_ID,
//         requestBody: {
//           summary: `Appointment with ${name}`,
//           start: { dateTime: `${date}T${time}:00`, timeZone: "UTC" },
//           end: {
//             dateTime: `${date}T${parseInt(time) + 1}:00`,
//             timeZone: "UTC",
//           },
//           attendees: [{ email }],
//         },
//       });
//     } else if (calendarType === "microsoft") {
//       const client = Client.init({
//         authProvider: (done) => done(null, process.env.MICROSOFT_ACCESS_TOKEN),
//       });

//       response = await client.api("/me/events").post({
//         subject: `Appointment with ${name}`,
//         start: { dateTime: `${date}T${time}:00`, timeZone: "UTC" },
//         end: { dateTime: `${date}T${parseInt(time) + 1}:00`, timeZone: "UTC" },
//         attendees: [{ emailAddress: { address: email }, type: "required" }],
//       });
//     }

//     await twilioClient.messages.create({
//       body: `Your appointment is confirmed on ${date} at ${time}`,
//       from: process.env.TWILIO_PHONE_NUMBER,
//       to: phone,
//     });

//     res.status(200).json({ success: true, eventId: response.data.id });
//   } catch (error) {
//     console.error("Error booking appointment:", error);
//     res.status(500).json({ error: "Failed to schedule appointment" });
//   }
// });

// // Generate Available Slots Helper Function
// function generateAvailableTimeSlots(busySlots) {
//   const allSlots = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00"];
//   return allSlots.filter(
//     (slot) => !busySlots.some((busy) => busy.start.includes(slot))
//   );
// }

// // Start server
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { google } = require("googleapis");
const { Client } = require("@microsoft/microsoft-graph-client");
const twilio = require("twilio");
const axios = require("axios");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(
  cors({
    origin: "https://www.qualitysites.pro", // Replace with your domain
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// Twilio Setup
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Endpoint to send a message via Twilio
app.post("/api/sendMessage", async (req, res) => {
  const { name, email, message, optIn } = req.body;
  if (!optIn) {
    return res
      .status(400)
      .json({ error: "You must opt-in to receive messages." });
  }
  const smsMessage = `New message from ${name} (${email}): ${message}`;
  try {
    const twilioRes = await twilioClient.messages.create({
      body: smsMessage,
      from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio number
      to: process.env.MY_PHONE_NUMBER, // Your receiving phone number
    });
    res.status(200).json({ success: true, sid: twilioRes.sid });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send message via Twilio." });
  }
});

// Nodemailer Email Setup
const transporter = nodemailer.createTransport({
  service: "gmail", // Use "outlook" if you're using Outlook
  auth: {
    user: process.env.EMAIL_USER, // Sender Email
    pass: process.env.EMAIL_PASS, // App Password or SMTP Password
  },
});

// Google OAuth Setup
const googleOAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
);

googleOAuth2Client.setCredentials({
  access_token: process.env.GOOGLE_ACCESS_TOKEN,
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

// Send Confirmation Email Function
const sendConfirmationEmail = async (
  recipientEmail,
  firstName,
  lastName,
  date,
  time
) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipientEmail,
      subject: "Appointment Confirmation - JGServicesLLC",
      html: `
        <h2>Hello ${firstName} ${lastName},</h2>
        <p>Your appointment has been successfully scheduled.</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p>We look forward to speaking with you.</p>
        <br>
        <p>Best Regards,</p>
        <p><strong>JGServicesLLC Team</strong></p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Confirmation email sent to:", recipientEmail);
  } catch (error) {
    console.error("Error sending confirmation email:", error);
  }
};

// Microsoft Outlook Calendar Setup
const microsoftClient = Client.init({
  authProvider: async (done) => {
    try {
      const tokenResponse = await axios.post(
        `https://login.microsoftonline.com/${process.env.MICROSOFT_TENANT_ID}/oauth2/v2.0/token`,
        null,
        {
          params: {
            client_id: process.env.MICROSOFT_CLIENT_ID,
            client_secret: process.env.MICROSOFT_CLIENT_SECRET,
            refresh_token: process.env.MICROSOFT_REFRESH_TOKEN,
            grant_type: "refresh_token",
          },
        }
      );
      done(null, tokenResponse.data.access_token);
    } catch (error) {
      done(error, null);
    }
  },
});

// Helper function to refresh Google access token
async function refreshGoogleAccessToken() {
  try {
    const { credentials } = await googleOAuth2Client.refreshAccessToken();
    process.env.GOOGLE_ACCESS_TOKEN = credentials.access_token;
    console.log("Google Access Token Refreshed");
  } catch (error) {
    console.error("Error refreshing Google access token:", error);
  }
}

// Refresh Google token every 50 minutes
setInterval(refreshGoogleAccessToken, 50 * 60 * 1000);

// Fetch available time slots from Google Calendar
app.get("/api/availability/google", async (req, res) => {
  try {
    const calendar = google.calendar({
      version: "v3",
      auth: googleOAuth2Client,
    });

    const response = await calendar.freebusy.query({
      requestBody: {
        timeMin: new Date().toISOString(),
        timeMax: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        items: [{ id: process.env.GOOGLE_CALENDAR_ID }],
      },
    });

    const busySlots =
      response.data.calendars[process.env.GOOGLE_CALENDAR_ID].busy;
    const availableSlots = generateAvailableTimeSlots(busySlots);
    res.header(
      "Access-Control-Allow-Origin",
      "https://react-portfolio-6uuf.onrender.com"
    );
    res.json({ availableSlots });
  } catch (error) {
    console.error("Google Calendar Error:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch availability from Google Calendar" });
  }
});

// Fetch available time slots from Microsoft Outlook Calendar
app.get("/api/availability/microsoft", async (req, res) => {
  try {
    const tokenResponse = await axios.post(
      `https://login.microsoftonline.com/${process.env.MICROSOFT_TENANT_ID}/oauth2/v2.0/token`,
      null,
      {
        params: {
          client_id: process.env.MICROSOFT_CLIENT_ID,
          client_secret: process.env.MICROSOFT_CLIENT_SECRET,
          refresh_token: process.env.MICROSOFT_REFRESH_TOKEN,
          grant_type: "refresh_token",
        },
      }
    );

    const accessToken = tokenResponse.data.access_token;

    const response = await axios.get(
      "https://graph.microsoft.com/v1.0/me/calendarview",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
        params: {
          startDateTime: new Date().toISOString(),
          endDateTime: new Date(
            Date.now() + 7 * 24 * 60 * 60 * 1000
          ).toISOString(),
        },
      }
    );

    const busySlots = response.data.value.map((event) => ({
      start: event.start.dateTime,
      end: event.end.dateTime,
    }));
    const availableSlots = generateAvailableTimeSlots(busySlots);
    res.json({ availableSlots });
  } catch (error) {
    console.error("Microsoft Calendar Error:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch availability from Microsoft Calendar" });
  }
});

// Book an appointment and send Twilio confirmation
// Schedule an appointment in Google or Microsoft Calendar
app.post("/api/schedule", async (req, res) => {
  const {
    firstName,
    lastName,
    phone,
    email,
    message,
    date,
    time,
    calendarType,
  } = req.body;

  try {
    let response;
    if (calendarType === "google") {
      const calendar = google.calendar({
        version: "v3",
        auth: googleOAuth2Client,
      });

      const formattedStartTime = new Date(
        `${date}T${time}:00.000Z`
      ).toISOString();
      const formattedEndTime = new Date(
        new Date(`${date}T${time}:00.000Z`).getTime() + 60 * 60 * 1000
      ).toISOString(); // +1 hour

      console.log("Formatted Start Time:", formattedStartTime);
      console.log("Formatted End Time:", formattedEndTime);

      response = await calendar.events.insert({
        calendarId: process.env.GOOGLE_CALENDAR_ID,
        requestBody: {
          summary: `Appointment with ${firstName} ${lastName}`,
          description: `Phone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
          start: { dateTime: formattedStartTime, timeZone: "UTC" },
          end: { dateTime: formattedEndTime, timeZone: "UTC" },
          attendees: [{ email }],
        },
      });
    }

    await twilioClient.messages.create({
      body: `Hello ${firstName}, your appointment is confirmed for ${date} at ${time}.`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phone,
    });

    // Send Email Confirmation
    await sendConfirmationEmail(email, firstName, lastName, date, time);

    res.status(200).json({ success: true, eventId: response.data.id });
  } catch (error) {
    console.error("Error booking appointment:", error);
    res.status(500).json({ error: "Failed to schedule appointment" });
  }
});

// Helper function to generate available slots
function generateAvailableTimeSlots(busySlots) {
  const allSlots = [
    "8:00am",
    "9:00am",
    "10:00am",
    "11:00am",
    "1:00pm",
    "2:00pm",
    "3:00pm",
    "4:00pm",
  ];
  return allSlots.filter(
    (slot) => !busySlots.some((busy) => busy.start.includes(slot))
  );
}

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
