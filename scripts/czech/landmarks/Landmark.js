export const Landmark = (landmark) => {
    return ` 
    <div class="card">
        <img class="cardImages" src="${landmark.image}" alt="${landmark.alt}">
        <p>${landmark.name}</p>
    </div> 
    `
}