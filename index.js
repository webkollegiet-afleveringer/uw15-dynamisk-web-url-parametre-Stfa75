const placeId = document.querySelector(".destinations");

const url = `data/destinations.json`

fetch(url)
    .then((Response) => Response.json())
    .then((data) => {


        data.destinations.forEach(places => {

            const destinationString = /*html*/ `
        <div class="spain">
            <img src="img/${places.image}" alt="billede af ${places.destination}">
            <h2>${places.destination}</h2>
            <h3>${places.title}</h3>
            <h4>${places.subtitle}</h4>
            <p>${places.text}</p>
            <ul>
                ${places.facilities.map(facility => `<li>${facility}</li>`).join('')}
            </ul>
            <a href="detaljer.html?id=${places.id}">Se her for detaljer</a>
        </div>
    `;
            placeId.insertAdjacentHTML("afterbegin", destinationString);

        });

    })