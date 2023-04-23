// import { createClient } from 'pexels';

// const client = createClient('IhJzYg9chacPhZdCqNm5z66aMZRHRdgNOd8vzbA9BidMMjHCIfnJGTmg');

// All requests made with the client will be authenticated

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'IhJzYg9chacPhZdCqNm5z66aMZRHRdgNOd8vzbA9BidMMjHCIfnJGTmg',
        'X-RapidAPI-Host': 'https://api.pexels.com/v1/curated?page=2&per_page=40'

    }
};


fetch('https://api.pexels.com/v1/curated?page=2&per_page=40', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));