const cityCollection = [
    {
        image: "../../../images/images_ireland/dublin.jpg",
        alt: "photo of Dublin, Ireland",
        name: "Dublin",
    },
    {
        image: "../../../images/images_ireland/galway.jpg",
        alt: "photo of Galway, Ireland",
        name: "Galway",
    },
    {
        image: "../../../images/images_ireland/cork.jpg",
        alt: "photo of Cork, Ireland",
        name: "Cork",
    },
    {
        image: "../../../images/images_ireland/waterford.jpg",
        alt: "photo of Waterford, Ireland",
        name: "Waterford",
    },
    {
        image: "../../../images/images_ireland/killarney.jpg",
        alt: "photo of Killarney, Ireland",
        name: "Killarney",
    },
]

export const useCities = () => {
    return cityCollection.slice()
}