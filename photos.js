const url = 'https://stock-photos-and-videos.p.rapidapi.com/api/suggestions';
console.log(url)
const options = {
    method: 'POST',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'f1aa506a2fmsh320dcd451cede70p17ae28jsnb96f61835673',
        'X-RapidAPI-Host': 'stock-photos-and-videos.p.rapidapi.com'
    },
    body: new URLSearchParams({ term: 'technology' })
};
async function stockPhotos() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }

}

stockPhotos()
    .then(data => {

        let ihtml = ""
        for (const item of data.id) {
            ihtml += `
              <div class="card" style="width: 18rem;">
              <img src="${item.id}" class="card-img-top" alt="...">
              </div>
            `
            console.log(data)
        };

        cardContainer.innerHTML = ihtml 

    });
