var nav_toggle_btn = document.querySelector(".toggle-btn")
var nav_container=document.querySelector(".nav-con")
var toggle_img=nav_toggle_btn.querySelector(".btn-img")
nav_toggle_btn.addEventListener("click",()=>{
    if(nav_container.classList.contains("closed")){
        nav_container.classList.remove("closed")
        toggle_img.src="images/icon-close.svg"
    }else{
        nav_container.classList.add("closed")
        toggle_img.src="images/icon-hamburger.svg"
    }
    

})