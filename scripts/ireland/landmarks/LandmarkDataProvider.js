const landmarkCollection = [
    {
        image: "../../../images/images_ireland/cliffs-of-moher.jpg",
        alt: "photo of Cliffs of Moher",
        name: "Cliffs of Moher",
    },
    {
        image: "../../../images/images_ireland/dublin-castle.jpg",
        alt: "photo of Dublin Castle",
        name: "Dublin Castle",
    },
    {
        image: "../../../images/images_ireland/st-patricks-cathedral.jpg",
        alt: "photo of St Patricks Cathedral",
        name: "St. Patricks Cathedral",
    },
    {
        image: "../../../images/images_ireland/guiness-storehouse.jpg",
        alt: "photo of Guiness Storehouse",
        name: "Guiness Storehouse",
    },
    {
        image: "../../../images/images_ireland/blarney-castle.jpg",
        alt: "photo of Blarney Castle",
        name: "Blarney Castle",
    },
]

export const useLandmarks = () => {
    return landmarkCollection.slice()
}