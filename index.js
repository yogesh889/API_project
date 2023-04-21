let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
    return v.json()
}).then((contests) => {
    ihtml = ""
    for (item in contests) {
        console.log(contests[item])
        ihtml += `
            <div class="card" style = "width: 18rem;">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOpMBTgrPtQuNSYqIzPVAEJgJbF7tWmT1LhnCrtAkFbe-_qgRXBj-25gZ0yuR_3sL6iNE&usqp=CAU" class="card-img-top" alt="...">
                <div class="card-body">
                        <h5 class="card-title">${contests[item].name}</h5>
                        <p class="card-text"> Status is ${contests[item].status} and site is ${contests[item].site}</p>
                        <p class="card-text"> In 24 Hours? ${contests[item].in_24_hours} </p>
                        <p>Start at: ${contests[item].start_time}
                        <p>End at: ${contests[item].end_time}
                        <a id="button" target="blank" href="${contests[item].url}" class="btn btn-primary my-6">Visit Contest</a>
                </div>
            </div >
            `
    }
    cardContainer.innerHTML = ihtml
})

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'bloomberg-market-and-financial-news.p.rapidapi.com'
	}
};

fetch('https://bloomberg-market-and-financial-news.p.rapidapi.com/market/auto-complete?query=%3CREQUIRED%3E', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));