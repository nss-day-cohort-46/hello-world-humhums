export const Citizen = (citizen) => {
    return `
    <div class="card">
        <img class="cardImages" src="${citizen.image}" alt="${citizen.alt}">
        <p>${citizen.name}</p>
    </div>
    `
}