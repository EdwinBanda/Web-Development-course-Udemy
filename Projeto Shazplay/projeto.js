const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://shazam.p.rapidapi.com/artists/get-top-songs',
  params: {
    artistId: '73406786',
    l: 'en-US',
    from: '2022-12-31',
    limit: '50',
    offset: '0'
  },
  headers: {
    'X-RapidAPI-Key': 'fe5f93d7e2msh1337bd83d1435afp18da83jsne1add7bb1e16',
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
  }
};

try {
	const response = axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}