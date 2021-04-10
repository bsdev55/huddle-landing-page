// Toggle Menu 
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.addEventListener("click",  () => {
    //this.classList.toggle("menu-active");

    //Toggle Class "open" On Links
    tLinks.classList.toggle("open");
});

// Click Anywhere Outside Menu And Toggle Button
document.addEventListener("click", (e) => {

    if (e.target !== toggleBtn) {

        console.log("this is not the button");
        
    }
});

//Nice Scroll 
    // @ts-ignore
    $("html").niceScroll();
    // @ts-ignore
    $('.carousel').carousel({
        interval: 6000
    });