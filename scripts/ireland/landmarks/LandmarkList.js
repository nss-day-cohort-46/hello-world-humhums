import { Landmark } from "./Landmark.js"
import { useLandmarks } from "./LandmarkDataProvider.js"

let landmarkHTML = ""
const buildLandmarkHTML = (landmarkArray) => {
    for (const landmarkObj of landmarkArray) {
        landmarkHTML += Landmark(landmarkObj)

    }
    return landmarkHTML
}

export const LandmarkList = () => {
    const contentElement = document.querySelector(".contentContainer")

    const allLandmarksArray = useLandmarks()

    buildLandmarkHTML(allLandmarksArray)

    contentElement.innerHTML += `
    <article class="contentContainer__landmarks">
        <h3>Must see Landmarks</h3>
        <div class="contentContainer__cards">
            ${landmarkHTML}
        </div>
    </article>        
    `
}