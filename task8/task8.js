document.querySelector("#btn-signin")
.addEventListener('click',function(){
    document.querySelector(".contaner")
        .classList.add("active");
    });
    document.querySelector(" .contaner .close-btn")
    .addEventListener('click',function(){
       document.querySelector(".contaner")
        .classList.remove("active");
    });