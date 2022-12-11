async function sendEmail(name, email, subject, message) {
  
    var b = Buffer.from('06aae484cba6f851c97d5ba328464f76');
    var apiKey = b.toString('base64');
    var a =  Buffer.from('933cb07387b79d8471a1428c81c9a3f5');
    var secretKey = a.toString('base64');
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.set('Authorization', 'Basic ' + apiKey + ":" + secretKey);
  
    const data = JSON.stringify({
      "Messages": [{
        "From": {"Email": email, "Name": name},
        "To": [{"Email":"ardi.ferdyhana@gmail.com", "Name": "Ardi Ferdyhana"}],
        "Subject": subject,
        "TextPart": message
      }]
    });
  
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: data,
    };
  
    fetch("https://api.mailjet.com/v3.1/send", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }