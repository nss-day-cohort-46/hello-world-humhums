const cityCollection = [
    {
        name: "Tokyo",
        image: "https://stillmed.olympic.org/media/Images/OlympicOrg/News/2020/03/24/2020-03-24-tokyo-thumbnail-01.jpg",
        alt: "a helicopter view of the city of Tokyo at sunrise with blur at the bottom"
    },
    {
        name: "Osaka",
        image: "https://s3.voyapon.com/wp-content/uploads/2020/04/22172053/Osaka_Shinsekai_86.jpg",
        alt: "downtown streets of osaka at night where the signs light up the sidewalks"
    },
    {
        name: "Kyoto",
        image: "https://cdn.contexttravel.com/image/upload/c_fill,q_60,w_2600/v1553227874/production/city/hero_image_27_1553227874.jpg",
        alt: "a residential street view of Kyoto facing a temple"
    },
    {
        name: "Sapporo",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/4d/45/dc/sapporo.jpg?w=1100&h=600&s=1",
        alt: "the city of Sopporo covered in snow at the base of the mountain"
    },
    {
        name: "Yokohama",
        image: "https://lp-cms-production.imgix.net/2019-06/fa6b8fcce2932f0b7b04d383035192ff-yokohama.jpg",
        alt: "the skyline of Yokohama from the river with a ferris wheel lit in pink lights"
    },
]

//make a copy of the array as to not modify the original data set

export const useCities = () => {
    return cityCollection.slice()
}