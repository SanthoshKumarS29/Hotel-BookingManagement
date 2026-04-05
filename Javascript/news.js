const newsData = [
  {
    title: "Tremblant In Canada",
    img: "./assets/webp/blog-1.webp",
    tag: "Travel Trip",
    time: "15th apirl, 2019",
  },
  {
    title: "Choosing A Static Caravan",
    img: "./assets/webp/blog-2.webp",
    tag: "Camping",
    time: "15th apirl, 2019",
  },
  {
    title: "Copper Canyon",
    img: "./assets/webp/blog-3.webp",
    tag: "Event",
    time: "21th April, 2019",
  },
  {
    title: "A Time Travel Postcard",
    img: "./assets/webp/blog-4.webp",
    tag: "Trivago",
    time: "22th April, 2019",
  },
  {
    title: "A Time Travel Postcard",
    img: "./assets/webp/blog-5.webp",
    tag: "Camping",
    time: "25th April, 2019",
  },
  {
    title: "Virginia Travel For Kids",
    img: "./assets/webp/blog-6.webp",
    tag: "Travel Trip",
    time: "28th April, 2019",
  },
  {
    title: "Bryce Canyon A Stunning",
    img: "./assets/webp/blog-7.webp",
    tag: "Travel Trip",
    time: "29th April, 2019",
  },
  {
    title: "Motorhome Or Trailer",
    img: "./assets/webp/blog-8.webp",
    tag: "Event & Travel",
    time: "30th April, 2019",
  },
  {
    title: "Lost In Lagos Portugal",
    img: "./assets/webp/blog-9.webp",
    tag: "Camping",
    time: "30th April, 2019",
  }
  
];

const container = document.getElementById('newsContainer');
const loadMoreBtn = document.getElementById("loadMoreBtn");

let visibleCount = 6;

function renderRoom() {
  container.innerHTML = ""

  newsData.slice(0, visibleCount).forEach(news => {
    const card = document.createElement("div");
    card.classList.add("news-content");

    card.innerHTML = `
        <img src="${news.img}" alt="${news.title}" width="370" height="450" class="img-fluid rounded">
        <div class="news-txt">
          <span class="news-tag">${news.tag}</span>
          <a href="blog-detail.html">${news.title}</a>
          <div class="news-time">
            <span><i class="fa-regular fa-clock"></i></span>
            <p>${news.time}</p>
          </div>
        </div>
    `;
    container.appendChild(card);
  })

  if (visibleCount >= newsData.length) {
    loadMoreBtn.style.display = "none"
  }

}

loadMoreBtn.addEventListener("click", () => {
  visibleCount += 3;
  renderRoom();
})

renderRoom()
