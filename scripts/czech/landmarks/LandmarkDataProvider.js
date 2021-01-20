const landmarkCollection = [
    {
        image: "../../../images/images_czech/st-vitus-cathedral.jpg",
        alt: "An up-view of the towering St. Vitus Cathedral",
        name: "St. Vitus Cathedral"
    },
    {
        image: "../../../images/images_czech/charles-bridge.jpg",
        alt: "a colorful street view of Prague, centering on the Charles Bridge",
        name: "Charles Bridge"
    },
    {
        image: "../../../images/images_czech/bohemian-paradise.jpg",
        alt: "The natural sandstone towers of Bohemian Paradise",
        name: "Bohemian Paradise"
    },
    {
        image: "../../../images/images_czech/astronomical-clock.jpg",
        alt: "The ancient astronomical clock in Prague",
        name: "Prague Astronomical Clock"
    },
    {
        image: "../../../images/images_czech/karlstejn-castle.jpg",
        alt: "The Karlstejn Castle, built around 1350 and home to Charles IV, emporor of the Roman Empire",
        name: "Karlstejn Castle"
    }
]

export const useLandmarks = () => {
    return landmarkCollection.slice()
}