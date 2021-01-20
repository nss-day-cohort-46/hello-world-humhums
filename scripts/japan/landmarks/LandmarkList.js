import { Landmark } from "./Landmark.js"
import { useLandmarks } from "./LandmarkDataProvider.js"

let landmarkHTML = ""
const buildLandmarksHTML = (landmarkArray) => {
    for (const landmarkObj of landmarkArray) {
        landmarkHTML += Landmark(landmarkObj)
        console.log("landmark", landmarkObj)
    }
    return landmarkHTML
}

export const LandmarkList = () => {
    const contentElement = document.querySelector(".contentContainer")

    const allLandmarksArray = useLandmarks()

    buildLandmarksHTML(allLandmarksArray)

    contentElement.innerHTML += `
        <article class="contentContainer__landmarks">
            <h3>Noteworthy Landmarks</h3>
            <div class="contentContainer__cards ">
                ${landmarkHTML}
            </div>
        </article>
        `
}