const url = 'https://stock-photos-and-videos.p.rapidapi.com/api/suggestions';
const options = {
    method: 'POST',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'f1aa506a2fmsh320dcd451cede70p17ae28jsnb96f61835673',
        'X-RapidAPI-Host': 'stock-photos-and-videos.p.rapidapi.com'
    },
    body: new URLSearchParams({ term: 'technology' })
};
async function myFunction() {
    let x = document.getElementById("search").value;
    document.getElementById("demo").innerHTML = x;
    console.log(x)
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
