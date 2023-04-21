const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f2ff42c3f8msh20d540c5f510ea5p1fcc3cjsnec4340916ff4',
		'X-RapidAPI-Host': 'bloomberg-market-and-financial-news.p.rapidapi.com'
	}
};

fetch('https://bloomberg-market-and-financial-news.p.rapidapi.com/market/auto-complete?query=%3CREQUIRED%3E', options)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    let ihtml = ""
    for (const item of data.news) {
        if (!${item.thumbnailImage}){
            
        
      ihtml += `
        <div class="card" style="width: 18rem;">
        ${item.thumbnailImage}
        <img src="${item.thumbnailImage}" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-title">${item.title}</p>
            <a id="button" target="blank" href="${item.longURL}" class="btn btn-primary my-6">Visit site</a>
          </div>
        </div>
      `
    }
}
    cardContainer.innerHTML = ihtml
  })
  .catch(err => console.error(err))


//   const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'f2ff42c3f8msh20d540c5f510ea5p1fcc3cjsnec4340916ff4',
// 		'X-RapidAPI-Host': 'bloomberg-market-and-financial-news.p.rapidapi.com'
// 	}
// };

// fetch('https://bloomberg-market-and-financial-news.p.rapidapi.com/stock/get-statistics?id=aapl%3Aus&template=STOCK', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

fetch('https://bloomberg-market-and-financial-news.p.rapidapi.com/stories/detail?internalID=QFY0Y6T0AFB501', options)
    .then(response => response.json())
    .then(data => {
    console.log(data)
    let ihtml = ""
    for (const item of data.news) {
        ihtml += `
        <div class="card" style="width: 18rem;">
            <img src="" alt="...">
            <div class="card-body">
            <p class="card-title">${item.title}</p>
            <a id="button" target="blank" href="${item.longURL}" class="btn btn-primary my-6">Visit Contest</a>
            <p>hello world</p>
            </div>
        </div>
        `
    }
    cardContainer.innerHTML = ihtml
    })
    .catch(err => console.error(err))