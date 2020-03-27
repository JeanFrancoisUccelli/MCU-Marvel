const arrayModal = ['open-modal','open-modal2','open-modal3','open-modal4','open-modal5','open-modal6','open-modal7','open-modal8','open-modal9','open-modal10','open-modal11','open-modal12','open-modal13','open-modal14','open-modal15','open-modal16','open-modal17','open-modal18','open-modal19','open-modal20','open-modal21','open-modal22','open-modal23','open-modal24'];
const arrayModalTrailer = ['modalTrailer','modalTrailer2','modalTrailer3','modalTrailer4','modalTrailer5','modalTrailer6','modalTrailer7','modalTrailer8','modalTrailer9','modalTrailer10','modalTrailer11','modalTrailer12','modalTrailer13','modalTrailer14','modalTrailer15','modalTrailer16','modalTrailer17','modalTrailer18','modalTrailer19','modalTrailer20','modalTrailer21','modalTrailer22','modalTrailer23','modalTrailer24'];


console.log(arrayModalTrailer[0])


for(i = 0;i < arrayModal.length;i++ ){
    const open = document.getElementById(`${arrayModalTrailer[i]}`);
    const buttonOpen = document.getElementById(`${arrayModal[i]}`);
    const buttonClose = document.getElementById(`${arrayModalTrailer[i]}`);
    buttonOpen.addEventListener('click',()=>{
    open.style.display ="block"})
    buttonClose.addEventListener('click',()=>{
    open.style.display="none"
})};



