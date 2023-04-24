document.querySelectorAll('.certificado').forEach((div) => {
    div.children[1].addEventListener("click", () => {
        div.firstElementChild.attributes.src.value
        ctn_certif_grande.firstElementChild.nextElementSibling.setAttribute('src', div.firstElementChild.attributes.src.value)
        ctn_certif_grande.style.display = "flex";
    })
})

function hide_cert() {
    document.getElementById("ctn_certif_grande").style.display = "none";
}

document.querySelectorAll("#certificados h3").forEach(item => {
    item.addEventListener('click', (evt) => {
        if (evt.target.nextElementSibling.style.display == 'flex') evt.target.nextElementSibling.style.display = "none"
        else evt.target.nextElementSibling.style.display = 'flex'
    })
})
