
const arrayModal = ['modal1','modal2','modal3','modal4','modal5','modal6','modal7']
const arrayOpenModal = ['open-modal1','open-modal2','open-modal3','open-modal4','open-modal5','open-modal6','open-modal7']
const arrayCloseModal = ['close-modal1','close-modal2','close-modal3','close-modal4','close-modal5','close-modal6','close-modal7']




for (i=0; i<arrayModal.length; i++) {
const modal = document.getElementById(`${arrayModal[i]}`);
const btn = document.getElementById(`${arrayOpenModal[i]}`);
const span = document.getElementById(`${arrayCloseModal[i]}`);
btn.onclick = function () {
    modal.style.display = "block";
};
span.onclick = function () {
    modal.style.display = "none";
};
}