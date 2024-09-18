const url = "https://data-lesson-13.vercel.app/phones";
const phoneContent = document.querySelector(".phoneContent");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close__btn");
const modalContent = document.querySelector(".modal-content");
let cardId = null;

const renderPhone = (phoneData) => {
  phoneContent.innerHTML = phoneData.map((item) =>
    `<div class="flex flex-col items-center pt-6 bg-slate-200 mx-6 my-6 py-4 px-4 justify-between">
        <div><img src="${item.img}" alt="img" class="w-32 h-32"></div>
        <div class="flex flex-col justify-between gap-2 items-center">
            <h1>${item.title}</h1>
            <h1>${item.brand}</h1>
            <button class="bg-green-600 px-4 py-1 rounded-md w-full text-white" data-id="${item.id}">info</button>
        </div>
    </div>`
  ).join("");
};

const renderModal = (itemData) => {
  modalContent.innerHTML = `
    <div class="text-center">
        <img src="${itemData.img}" alt="img" class="w-32 h-32 mx-auto">
        <h1 class="mt-4">${itemData.title}</h1>
        <h2>${itemData.brand}</h2>
        <p class="mt-2">${itemData.description}</p>
    </div>`;
  modal.classList.remove("hidden"); 
};

// Modalni yopish uchun
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden"); 
});

const getDataPhone = async () => {
  try {
    const res = await fetch(url);
    const phoneData = await res.json();
    renderPhone(phoneData); 
  } catch (error) {
    console.log("Error fetching phones");
  }
};

const getItemPhone = async () => {
  try {
    const res = await fetch(`${url}/${cardId}`);
    const itemData = await res.json();
    renderModal(itemData);
  } catch (error) {
    console.log("Error fetching item data");
  }
};

phoneContent.addEventListener("click", async (e) => {
  if (e.target.dataset.id) {
    cardId = e.target.dataset.id;
    await getItemPhone(); 
  }
});

getDataPhone();
