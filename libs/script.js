$(document).ready(function () {
    // bootstrap tolltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    document.querySelectorAll(".tec-used").forEach(function (el){
        console.log(el);
        el.classList.add("badge");
        el.classList.add("rounded-pill");
        el.classList.add("text-bg-primary");
    })
    document.querySelectorAll(".tec-not-used").forEach(function (el){
        console.log(el);
        el.classList.add("badge");
        el.classList.add("rounded-pill");
        el.classList.add("text-bg-secondary");
    })
});
