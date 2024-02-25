const apiUrl = 'https://api.github.com/users/';
const username = 'FenTheDeer';

fetch(apiUrl + username)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Error:', error));