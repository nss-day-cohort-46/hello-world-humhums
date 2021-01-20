import { City } from "./City.js"
import { useCities } from "./CityDataProvider.js"

let cityHTML = ""
const buildCityHTML = (cityArray) => {
    for (const cityObj of cityArray) {
        cityHTML += City(cityObj)

    }
    return cityHTML
}

export const CityList = () => {
    const contentElement = document.querySelector(".contentContainer")

    const allCitiesArray = useCities()

    buildCityHTML(allCitiesArray)

    contentElement.innerHTML += `
    <article class="contentContainer__cities">
        <h3>Cities to Visit</h3>
        <div class="contentContainer__cards">
            ${cityHTML}
        </div>
        </article>   
    `
}