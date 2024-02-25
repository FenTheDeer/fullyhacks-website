const ApiController = (function(){

const client_id = '5e097fed8bb4473490fa0922390d65c6' ;
const client_credentials = '73aa230682e249c2aac2e905519aef86' ; 

async function getToken() {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      body: new URLSearchParams({
        'grant_type': 'client_credentials',
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')),
      },
    });
  
    const data = await response.json();
    return data.access_token;
  }
})();

