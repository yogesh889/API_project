// // import { createClient } from 'pexels';

// // const client = createClient('IhJzYg9chacPhZdCqNm5z66aMZRHRdgNOd8vzbA9BidMMjHCIfnJGTmg');

// // All requests made with the client will be authenticated

// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'IhJzYg9chacPhZdCqNm5z66aMZRHRdgNOd8vzbA9BidMMjHCIfnJGTmg',
//         'X-RapidAPI-Host': 'https://api.pexels.com/v1/curated?page=2&per_page=40'

//     }
// };


// fetch('https://api.pexels.com/v1/curated?page=2&per_page=40', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));


const apiKey = 'IhJzYg9chacPhZdCqNm5z66aMZRHRdgNOd8vzbA9BidMMjHCIfnJGTmg';
const query = 'cat';
const url = `https://api.pexels.com/v1/search?query=${query}&per_page=10`;

fetch(url, {
  headers: {
    Authorization: apiKey,
  },
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let ihtml = ""
    for (const item of data.photos) {
          ihtml += `
            <div class="card" style="width: 18rem;">
            <img src="${item.src.small}" class="card-img-top" alt="...">
              <div class="card-body">
                <p class="card-title">${item.alt}</p>
                <p class="card-title">${item.photographer}</p>
                <a id="button" target="blank" href="${item.url}" class="btn btn-primary my-6">Visit site</a>
              </div>
            </div>
          `
    }
    cardContainer.innerHTML = ihtml
  })
  .catch(error => {
    console.error(error);
  });

