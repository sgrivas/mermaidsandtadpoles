function showMenu(){
    document.querySelector(".navbar").classList.toggle("open");
    document.querySelector(".nav-list").classList.toggle("open");
}

function changeBg(){
    var header=document.getElementById("header");
    var scrollValue=window.scrollY;
    if(scrollValue < 150){
        header.classList.remove("bgcolor");
    }else{
        header.classList.add("bgcolor");
    }
}
window.addEventListener("scroll", changeBg);