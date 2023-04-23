const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f1aa506a2fmsh320dcd451cede70p17ae28jsnb96f61835673',
    'X-RapidAPI-Host': 'bloomberg-market-and-financial-news.p.rapidapi.com'
  }
};

var url = 'https://bloomberg-market-and-financial-news.p.rapidapi.com/market/auto-complete?query=%3CREQUIRED%3E';
    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        let ihtml = ""
        for (const item of data.news) {
          if (item.thumbnailImage) {
            ihtml += `
              <div class="card" style="width: 18rem;">
              <img src="${item.thumbnailImage}" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-title">${item.title}</p>
                  <a id="button" target="blank" href="${item.longURL}" class="btn btn-primary my-6">Visit site</a>
                </div>
              </div>
            `
          }
          else {
            ihtml += `
                <div class="card" style="width: 18rem;">
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

function myFunction() {
  var x = document.getElementById("mySearch").value;
  document.getElementById("demo").innerHTML = x;

  if (x !== "") {
    var url = 'https://bloomberg-market-and-financial-news.p.rapidapi.com/market/auto-complete?query=' + x;
    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        let ihtml = ""
        for (const item of data.news) {
          if (item.thumbnailImage) {
            ihtml += `
            <div class="card" style="width: 18rem;">
            <img src="${item.thumbnailImage}" class="card-img-top" alt="...">
              <div class="card-body">
                <p class="card-title">${item.title}</p>
                <a id="button" target="blank" href="${item.longURL}" class="btn btn-primary my-6">Visit site</a>
              </div>
            </div>
          `
          }
          else {
            ihtml += `
              <div class="card" style="width: 18rem;">
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
  }
}

