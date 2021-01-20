
const landmarkCollection = [
    {
        image: "../../../images/images_Antarctica/McMurdo.jpg",
        alt: "McMurdo Station",
        name: "McMurdo Station",
    },  
    {
        image: "../../../images/images_Antarctica/icebergFriends.jpg",
        alt: "Glaciers & Ice Caves",
        name: "Glaciers & Ice Caves",
    },  
    {
        image: "../../../images/images_Antarctica/capeEvans.jpg",
        alt: "Historic Explorer Huts",
        name: "Historic Explorer Huts",
    },
    {
        image: "../../../images/images_Antarctica/3 Stooges.jpg",
        alt: "3 Emperor Penguins",
        name: "Wildlife",
    },
    {
        image: "../../../images/images_Antarctica/fieldCamp.jpg",
        alt: "A field camp in Antarctica",
        name: "Field Camps",
    },
]

export const useLandmarks = () => {
    return landmarkCollection.slice()
}