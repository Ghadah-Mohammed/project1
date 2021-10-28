const modalBtnlist = document.querySelectorAll(".modal-btn");
console.log(modalBtnlist);

modalBtnlist.forEach(function (modalBtn) {
  modalBtn.addEventListener("click", function () {
    const modalBg = modalBtn.nextElementSibling;
    modalBg.classList.add("bg-active");
    console.log(modalBg);

  });
});

const sublist= document.querySelectorAll(".subscribe")
sublist.forEach(function(subButton){
subButton.addEventListener("click",function(){
    alert("you have booked")
    const modalBg=subButton.parentElement.parentElement
    modalBg.classList.remove("bg-active");


    
})
})


