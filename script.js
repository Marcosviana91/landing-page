const certificado = document.querySelectorAll('.certificado')
const ctn_certif_grande = document.getElementById("ctn_certif_grande")

certificado.forEach((div)=>{
    div.children[1].addEventListener("click", ()=>{
        div.firstElementChild.attributes.src.value
        ctn_certif_grande.firstElementChild.nextElementSibling.setAttribute('src', div.firstElementChild.attributes.src.value)
        ctn_certif_grande.style.display = "flex";
    })
})

function hide_cert(){
    ctn_certif_grande.style.display = "none";
}