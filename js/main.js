const button = document.querySelector(".burger-button");
const header = document.querySelector(".header");

function setupMenu() {
  header.classList.remove("open");

  button.addEventListener("click", () => {
    header.classList.toggle("open");
  });
}

setupMenu();

function createCarousel(
  listSelector,
  itemSelector,
  prevButtonSelector,
  nextButtonSelector
) {
  const list = document.querySelector(listSelector);
  const items = document.querySelectorAll(itemSelector);
  const prevButton = document.querySelector(prevButtonSelector);
  const nextButton = document.querySelector(nextButtonSelector);

  let currentIndex = 0;
  const totalItems = items.length;

  function updateCarousel() {
    const itemWidth = items[0].offsetWidth;
    console.log(itemWidth);
    const offset = currentIndex * -itemWidth;
    list.style.transform = `translateX(${offset}px)`;
  }

  prevButton.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : totalItems - 1;
    console.log("click left");
    updateCarousel();
  });

  nextButton.addEventListener("click", () => {
    currentIndex = currentIndex < totalItems - 1 ? currentIndex + 1 : 0;
    console.log("click right");
    updateCarousel();
  });
}
createCarousel(
  ".contacts-list",
  ".contacts-item",
  ".prev-btn-svg",
  ".next-btn-svg"
);
createCarousel(".cards", ".card", ".cards-prev-btn", ".cards-next-btn");
createCarousel(
  ".tech-stack",
  ".tech-image",
  ".tech-prev-btn",
  ".tech-next-btn"
);
createCarousel(
  ".process-list",
  ".process-item",
  ".process-prev-btn",
  ".process-next-btn"
);
