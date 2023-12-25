const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // For simplicity, just log the login data
  console.log(`Received login data - Username: ${username}, Password: ${password}`);

  // Respond to the client (you can customize this based on your logic)
  res.json({ success: true, message: 'Login data received and stored successfully.' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
