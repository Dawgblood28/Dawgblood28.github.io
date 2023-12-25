document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Send login data to the server
  fetch('https://github.com/Dawgblood28/Dawgblood28.github.io/tree/main', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    alert(data.message); // You can customize this alert based on the server response
  })
  .catch(error => {
    console.error('Error:', error);
  });
});
