const url = 'https://stock-photos-and-videos.p.rapidapi.com/api/search?query='+x;

const options = {
    method: 'GET',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'f1aa506a2fmsh320dcd451cede70p17ae28jsnb96f61835673',
        'X-RapidAPI-Host': 'stock-photos-and-videos.p.rapidapi.com'
    },

};


let photos = async (x) => {
    const url = new URLSearchParams({term: 'technology'})
    console.log(url)

    // const url = 'https://stock-photos-and-videos.p.rapidapi.com/api/suggestions'


    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error)
    }

    let ihtml = ""
    for (const item of result.photos) {
        ihtml += `
            <div class="card" style="width: 18rem;">
            <img src="" class="card-img-top" alt="...">
              <div class="card-body">
              <p class="card-title">${item.slug}</p>
              <p class="card-title">${item.title}</p>
                <a id="button" target="blank" href="${item.updated_at}" class="btn btn-primary my-6">Visit site</a>
              </div>
            </div>
          `
    }
    cardContainer.innerHTML = ihtml

}

let stockPhotos = () => {
    let x = document.getElementById("search").value;
    console.log(x)
    document.getElementById("demo").innerHTML = x;
    if (x != "") {
        console.log(x)
        photos()
    }
    else {
        photos()
    }
}

