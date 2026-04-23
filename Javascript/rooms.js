const roomsData = [
  {
    title: "Premium King Room",
    price: 159,
    img: "./assets/webp/room-1.webp",
    size: "30ft",
    capacity: "Max Person 5",
    bed: "King Beds",
    service: "Wifi, Television, Bathroom"
  },
  {
    title: "Deluxe Room",
    price: 120,
    img: "./assets/webp/room-2.webp",
    size: "28ft",
    capacity: "Max Person 4",
    bed: "Queen Bed",
    service: "Wifi, TV"
  },
  {
    title: "Luxury Suite",
    price: 220,
    img: "./assets/webp/room-3.webp",
    size: "40ft",
    capacity: "Max Person 6",
    bed: "King Beds",
    service: "Wifi, TV, Jacuzzi"
  },
  {
    title: "Premium King Room",
    price: 159,
    img: "./assets/webp/room-4.webp",
    size: "30ft",
    capacity: "Max Person 5",
    bed: "King Beds",
    service: "Wifi, Television, Bathroom"
  },
  {
    title: "Deluxe Room",
    price: 120,
    img: "./assets/webp/room-5.webp",
    size: "28ft",
    capacity: "Max Person 4",
    bed: "Queen Bed",
    service: "Wifi, TV"
  },
  {
    title: "Luxury Suite",
    price: 220,
    img: "./assets/webp/room-6.webp",
    size: "40ft",
    capacity: "Max Person 6",
    bed: "King Beds",
    service: "Wifi, TV, Jacuzzi"
  },
  {
    title: "Premium King Room",
    price: 159,
    img: "./assets/webp/room-1.webp",
    size: "30ft",
    capacity: "Max Person 5",
    bed: "King Beds",
    service: "Wifi, Television, Bathroom"
  },
  {
    title: "Deluxe Room",
    price: 120,
    img: "./assets/webp/room-2.webp",
    size: "28ft",
    capacity: "Max Person 4",
    bed: "Queen Bed",
    service: "Wifi, TV"
  },
  {
    title: "Luxury Suite",
    price: 220,
    img: "./assets/webp/room-3.webp",
    size: "40ft",
    capacity: "Max Person 6",
    bed: "King Beds",
    service: "Wifi, TV, Jacuzzi"
  },
];

const container = document.getElementById('roomsContainer');
const loadMoreBtn = document.getElementById("loadMoreBtn");

let visibleCount = 6;

function renderRoom() {
  container.innerHTML = ""

  roomsData.slice(0, visibleCount).forEach(room => {
    const card = document.createElement("div");
    card.classList.add("room-child-container");

    card.innerHTML = `
      <div>
        <img src="${room.img}" alt="${room.title}" width="550" height="550" class="img-fluid" loading="lazy">
      </div>
      <div class="rcc-body-txt">
        <h2 class="rc-text-1">${room.title}</h2>
        <p class="rc-text-2"><span>${room.price}$</span> / Pernight</p>

        <div class="rc-text-3-container">
          <p>Size:</p><p>${room.size}</p>
          <p>Capacity:</p><p>${room.capacity}</p>
          <p>Bed:</p><p>${room.bed}</p>
          <p>Service:</p><p>${room.service}</p>
        </div>

        <div>
          <a href="rooms-detail.html" class="rc-footer-link">More Details</a>
        </div>
      </div>
    `;
    container.appendChild(card);
  })

  if (visibleCount >= roomsData.length) {
    loadMoreBtn.style.display = "none"
  }

}

loadMoreBtn.addEventListener("click", () => {
  visibleCount += 3;
  renderRoom();
})

renderRoom()
