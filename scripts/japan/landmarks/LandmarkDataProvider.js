const landmarkCollection = [
    {
        image: "https://a3.cdn.japantravel.com/photo/3016-194379/1440x960!/tokyo-shibuya-crossing-194379.jpg",
        alt: "Shibyua Crossing at night full of pedestrians",
        name: "Shibuya Crossing"
    },
    {
        image: "https://photos.smugmug.com/Kyoto/Arashiyama-Walking-Tour/i-VFqxMrS/0/ca116127/L/shutterstock_93262912-L.jpg",
        alt: "a walking path through the middle of the bamboo grove",
        name: "Arashiyama Bamboo Grove"
    },
    {
        image: "https://i0.wp.com/tadaimajp.com/wp-content/uploads/2015/08/itsukushima.jpg?fit=790%2C535&ssl=1",
        alt: "a shrine in the water at sunset with a few visitors in its shadow",
        name: "Itsukushima Shrine"
    },
    {
        image: "https://resources.matcha-jp.com/original/2019/03/14-73022.jpeg",
        alt: "a waterway in the city with sidewalks and tall buildings down each side",
        name: "Dotonbori"
    },
    {
        image: "https://www.japan-guide.com/g9/3501_01.jpg",
        alt: "himeji castle in the daytime",
        name: "Himeji Castle"
    },
]

export const useLandmarks = () => {
    return landmarkCollection.slice()
}