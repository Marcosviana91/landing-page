$(document).ready(function () {
    const efeitosBasicoBtnGroup = document.querySelectorAll("#efeitos #basicos button")
    const efeitosFadeBtnGroup = document.querySelectorAll("#efeitos #fade button")
    const input_fade = document.querySelector("#efeitos #fade input");
    const efeitosSlideBtnGroup = document.querySelectorAll("#efeitos #slide button")
    const effect_interact = document.querySelector("#efeitos  #interagir")

    $(efeitosBasicoBtnGroup[0]).click(function (e) { 
        e.preventDefault();
        $(effect_interact).hide();
    });
    $(efeitosBasicoBtnGroup[1]).click(function (e) { 
        e.preventDefault();
        $(effect_interact).show();
    });
    $(efeitosBasicoBtnGroup[2]).click(function (e) { 
        e.preventDefault();
        $(effect_interact).toggle();
    });

    $(efeitosFadeBtnGroup[0]).click(function (e) { 
        e.preventDefault();
        $(effect_interact).fadeOut();
    });
    $(efeitosFadeBtnGroup[1]).click(function (e) { 
        e.preventDefault();
        $(effect_interact).fadeIn();
    });
    $(efeitosFadeBtnGroup[2]).click(function (e) { 
        e.preventDefault();
        $(effect_interact).fadeToggle();
    });
    $(efeitosFadeBtnGroup[3]).click(function (e) { 
        e.preventDefault();
        $(effect_interact).fadeTo('fast', input_fade.value/100);
    });
    $(input_fade).change(function (e) { 
        e.preventDefault();
        efeitosFadeBtnGroup[3].firstElementChild.innerHTML = input_fade.value/100;
    });

    $(efeitosSlideBtnGroup[0]).click(function (e) { 
        e.preventDefault();
        $(effect_interact).slideUp();
    });
    $(efeitosSlideBtnGroup[1]).click(function (e) { 
        e.preventDefault();
        $(effect_interact).slideDown();
    });
    $(efeitosSlideBtnGroup[2]).click(function (e) { 
        e.preventDefault();
        $(effect_interact).slideToggle();
    });
});