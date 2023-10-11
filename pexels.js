var pagurl = 'https://api.pexels.com/v1/curated?page=2&per_page=40';


const options = {
  method: 'GET',
  headers: {
    Authorization: 'IhJzYg9chacPhZdCqNm5z66aMZRHRdgNOd8vzbA9BidMMjHCIfnJGTmg',
    'X-RapidAPI-Key': '6c5fdf6306mshe8cce73b2aa3666p1f48ccjsn4b22b91415e3',
    'X-RapidAPI-Host': 'PexelsdimasV1.p.rapidapi.com'
  }
};

let result; // declare the result variable here

let pexels = async (x) => {
  var url = 'https://pexelsdimasv1.p.rapidapi.com/v1/search?query='+x+'&locale=en-US&per_page=15&page=1';
  try {
    const response = await fetch(url, options);
    result = await response.json(); // assign the result inside the try block
    console.log(result);

  } catch (error) {
    console.error(error);
  }

  console.log(result); // result is accessible here
  let ihtml = ""
  for (const item of result.photos) {
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
}



var myFunction = (x) => {


    var x = document.getElementById("mySearch").value;
    console.log(x)
    document.getElementById("demo").innerHTML = x;
    if (x != "") {
      console.log(x)
      pexels(x)
    }
    else{
      var url = 'https://pexelsdimasv1.p.rapidapi.com/v1/search?query=ocean&locale=en-US&per_page=15&page=1';
      pexels(url)
    }
  }

  var nextPage = () => {
    
  }