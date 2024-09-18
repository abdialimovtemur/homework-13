const url = "https://data-lesson-13.vercel.app/phones";
const phoneContent = document.querySelector(".phoneContent");
const modal = document.querySelector(".modal");
let cardId = null;





const renderPhone = (phoneData) => {
    phoneContent.innerHTML = phoneData.map((item) =>

        `<div class="flex flex-col items-center pt-6 bg-slate-200 mx-6  my-6 py-4 px-4 justify-between">
            <div><img src="${item.img}" alt="img"></div>
            <div class="flex flex-col justify-between  gap-2 items-center">
                <h1>${item.title}</h1>
                <h1>${item.brand}</h1>
                <button class="bg-green-600 px-4 py-1 rounded-md w-full text-white" data-id="${item.id}">info</button>
            </div>
        </div>`
    ).join("")
}





phoneContent.addEventListener("click", (e) => {
    if (e.target.dataset.id) {
        cardId = e.target.dataset.id
        await getItemPhone();





        const renderModal = (itemData) => {
            modal.innerHTML = itemData.map((item) =>
                `<div class="flex flex-col items-center pt-6 bg-slate-200 mx-6  my-6 py-4 px-4 justify-between">
            <div><img src="${item.img}" alt="img"></div>
            <div class="flex flex-col justify-between  gap-2 items-center">
                <h1>${item.title}</h1>
                <h1>${item.brand}</h1>
                <button class="bg-green-600 px-4 py-1 rounded-md w-full text-white" data-id="${item.id}">info</button>
            </div>
        </div>`
            ).join("")
        }
    }

})





const getDataPhone = async () => {
    try {
        const res = await fetch(url);
        const phoneData = await res.json();
        renderPhone(phoneData)
    } catch (error) {
        console.log("error")
    }
};
getDataPhone()




const getItemPhone = async () => {
    try {
        const res = await fetch(`${url}/${cardId}`);
        const itemData = await res.json();
        // console.log(res);
        
        renderModal(itemData)
    } catch (error) {
        console.log("Error error error")
    }
};
getItemPhone()
