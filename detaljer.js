const searc = window.location.search;

const urlSearc = new URLSearchParams(searc)
console.log(urlSearc.get("id"));
const id = urlSearc.get("id")

const infoSearch = document.querySelector(".info")

const url = `data/${id}.json`

fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
        renderDestination(data)
    })

function renderDestination(data) {
    // Vi pakker 'item' ud, så vi kan bruge navnene direkte
    const { image, destination, title, subtitle, text, facilities } = data;

    console.log(data);
    console.log(data.destination[1]);

    const destinationString = /*html*/
        `
<div class="places">
            <img src="img/${image}" alt="billede af ${destination}">
            <h2>${destination}</h2>
            <h3>${title}</h3>
            <h4>${subtitle}</h4>
            <p>${text}</p>
            <ul>
                ${facilities.map(facility => `<li>${facility}</li>`).join('')}
            </ul>
            <a href = index.html> Gå til forsiden</a>
    </div>
`
    infoSearch.insertAdjacentHTML("afterbegin", destinationString);
    console.log(destinationString);

}


