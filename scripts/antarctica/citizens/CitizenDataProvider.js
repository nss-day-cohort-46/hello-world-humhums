const citizenCollection = [
    {
        image: "https://www.surfertoday.com/images/jamp/page/captain-james-cook.jpg",
        alt: "Captain James Cook",
        name: "Captain James Cook"
    },
    {
        image: "https://cdn.shopify.com/s/files/1/1482/7698/articles/1-BNY9D4-feature_1600x.jpg?v=1563410249",
        alt: "Captain Robert Falcon Scott",
        name: "Captain Robert Falcon Scott"
    },
    {
        image: "https://cdn.images.express.co.uk/img/dynamic/130/590x/endurance1-944557.jpg",
        alt: "Sir Ernest Shackleton",
        name: "Sir Ernest Shackleton"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/3/32/James_Clark_Ross_%28cropped%29.jpg",
        alt: "Sir James Clark Ross",
        name: "Sir James Clark Ross"
    },
    {
        image: "https://www.thevintagenews.com/wp-content/uploads/2017/06/Roald-Amundsen.jpg",
        alt: "Roald Amundsen",
        name: "Roald Amundsen"
    }
]

export const useCitizens = () => {
    return citizenCollection.slice()
}