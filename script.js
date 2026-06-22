// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior: "smooth"
        });
    });
});
window.addEventListener("DOMContentLoaded", ()=>{
    let sections = document.querySelectorAll("section");

    function reveal(){
        sections.forEach(sec=>{
            let top = sec.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;

            if(top < windowHeight - 100){
                sec.style.opacity = "1";
                sec.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", reveal);
    reveal(); // run once on load
});
window.addEventListener("DOMContentLoaded", ()=>{
    let sections = document.querySelectorAll("section");

    function reveal(){
        sections.forEach(sec=>{
            let top = sec.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;

            if(top < windowHeight - 100){
                sec.style.opacity = "1";
                sec.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", reveal);
    reveal(); // run once on load
});