import { } from "./jquery/jquery-3.7.0.min.js";

$(function () {
    // bootstrap tolltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    //Certificados
    $('.certificados h3').each(function (i, el) {
        $(el.nextElementSibling).hide();
        $(el).on("click", function (evt) {
            $(el.nextElementSibling).slideToggle();
        })
    })

    //Portifólio
    $(".tec-used").each(function (indexInArray, el) {
        el.classList.add("badge");
        el.classList.add("rounded-pill");
        el.classList.add("text-bg-primary");
    });
    $(".tec-not-used").each(function (indexInArray, el) {
        el.classList.add("badge");
        el.classList.add("rounded-pill");
        el.classList.add("text-bg-secondary");
    });

    //Modal
    const modal_certificado = new bootstrap.Modal('#modal_certificado');
    $('.certificados .card img').each((index, element) => {
        $(element).on("click", () => {
            $('#modal_certificado img').attr('src', $(element).attr('src').replace('/card', ''));
            modal_certificado.show();
        })
    })

    //QR Code
    const url_atual = window.location.href;
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        width: 200,
        height: 200
    });
    function makeCode() {
        qrcode.makeCode(url_atual);
    }
    makeCode();

});
