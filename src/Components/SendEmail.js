
function sendEmail(email,name, subject, body) {
  // Import the Mailjet library
  const Mailjet = require('mailjet-client');

  // Create a Mailjet client object
  const mailjet = new Mailjet('06aae484cba6f851c97d5ba328464f76', 'd313ad23825dd5e3666930e07bf916c9');

  // This is the email data
  const emailData = {
    FromEmail: email,
    FromName: name,
    Subject: subject,
    TextPart: body,
    Recipients: 'ardi.ferdyhana@gmail.com'
  };

  // Send the email
  mailjet.post("send").request(emailData)
    .then((result) => {
      // If the email was sent successfully, display a success message
      console.log("Email sent successfully");
    })
    .catch((error) => {
      // If there was an error sending the email, display an error message
      console.log("Failed to send email: ", error);
    });
}