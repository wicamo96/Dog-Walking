import { getWalkers } from "./database.js"

const walkers = getWalkers()

document.addEventListener("click", (click) => {
    const whatWasClickedOn = click.target;

    if (whatWasClickedOn.dataset.type === "city") {
        // Declare an empty array to store walkers that operate in the city that was clicked
        let walkerArray = []

        // Iterate through walkers array
        for (const walker of walkers) {
            // If the walker operates in the city that was clicked
            if (walker.city === whatWasClickedOn.innerText) {
                // Add walker to the walkerArray
                walkerArray.push(walker)
            }
        }

        // Check length of walkerArray for formatting purposes
        if (walkerArray.length === 1) {
            window.alert(`This city serviced by ${walkerArray[0].name}`);
        }
        else if (walkerArray.length === 2) {
            window.alert(`This city serviced by ${walkerArray[0].name} and ${walkerArray[1].name}`);
        }
    }

})

export const CityList = () => {
    let citiesHTML = "<ol>"

    // Declare an empty array to store cities that have been displayed
    let citiesArray = [];

    for (const walker of walkers) {
        // Check whether or not the city the walker operates in is already displayed
        if (citiesArray.find(city => city === walker.city) === undefined) {
            citiesHTML += `<li data-type="city"
                            data-walkername="${walker.name}">  
                            ${walker.city}
                        </li>`
            
            // Add the city name to the array as its now displayed
            citiesArray.push(walker.city);
        }
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

