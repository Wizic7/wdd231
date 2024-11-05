const openBtn = document.querySelector("#open-modal");
const closeBtn = document.querySelector(".close-button");
const modal = document.querySelector("#modal");

function openModal()
{
    modal.classList.add("open");
    modal.ariaHidden = false;
}

function closeModal()
{
    modal.classList.remove("open");
    modal.ariaHidden = true;
}

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", function(event){
    if(event.target === modal)
    {
        closeModal();
    }
});
window.addEventListener("keydown", function(event) {
    if (event.key === "Escape")
    {
        closeModal();
    }
});

