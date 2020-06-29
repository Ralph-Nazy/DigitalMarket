const search = document.getElementById("from");
const matchList = document.getElementById("match-list");

//Search states.json and filter it same as map on autocomplete jquery ui
const searchAirports = async searchText => {
    const res = await fetch("./json/airports.json");
    const airports = await res.json();

    //Get Matches to current text input
    let matches = airports.filter(airport => {
        const regex = new RegExp(`^${searchText}`, "gi");
        return airport.city.match(regex) || airport.code.match(regex);
    });

    if (searchText.length === 0) {
        matches = [];
        matchList.innerHTML = "";
    }

    outputHtml(matches);
};

//Display Results in HTML
const outputHtml = matches => {
    if (matches.length > 0) {
        const html = matches
            .map(
                match => `
      <div class="card card-body">
      <h4 id="cities" onClick="modifyText(this)"><span class="text-primary">${match.code} </span>${match.city}</h4> 
      </div>`
            )
            .join("");
        matchList.innerHTML = html;
    }
};

search.addEventListener("input", () => searchAirports(search.value));

function modifyText(clickedAirport) {
    const addToValue = $(clickedAirport).text();
    document.getElementById("from").value = addToValue;
    matchList.innerHTML = "";
}