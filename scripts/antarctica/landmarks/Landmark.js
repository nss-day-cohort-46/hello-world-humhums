export const Landmark = (landmark) => {
    return `
    <div class="card">
        <img class="cardImages" src="${landmark.image}" alt="${landmark.alt}"></img>
            <p>${landmark.name}</p>
        </div>
    `
}