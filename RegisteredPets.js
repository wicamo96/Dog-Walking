import { getPets } from "./database.js"

import { getWalkers } from "./database.js";

const pets = getPets();

const walkers = getWalkers();

document.addEventListener("click", (click) => {
    const whatWasClickedOn = click.target;

    if (whatWasClickedOn.dataset.type === "pet") {
        const walker = walkers.find(walker => walker.id === parseInt(whatWasClickedOn.dataset.walkerforeignkey));
        
        window.alert(`This pet is being walked by ${walker.name}`);
    }
})

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li data-walkerForeignKey="${pet.walkerId}"
                        data-type="pet">
                        ${pet.name}
                    </li>`
    }

    petHTML += "</ul>"

    return petHTML
}

