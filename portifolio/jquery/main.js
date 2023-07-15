$(document).ready(function () {
    {
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
            $(effect_interact).fadeTo('fast', input_fade.value / 100);
        });
        $(input_fade).change(function (e) {
            e.preventDefault();
            efeitosFadeBtnGroup[3].firstElementChild.innerHTML = input_fade.value / 100;
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
    }
    {
        const elemento1_Set = new Set()
        $.each($('section#seletores div#interagir *'), function (indexInArray, valueOfElement) {
            elemento1_Set.add(valueOfElement.localName)
        });
        elemento1_Set.forEach(function (indexInArray, valueOfElement) {
            $("#elemento1").append(`<option value="${valueOfElement}">${valueOfElement}</option>`);
        })

        
        function preFiltrar() {
            let elemento1 = $("#elemento1").val();
            let tipo_filtro = $("#tipo_filtro").val();
            var elemento_alvo_Set = new Set()

            if (elemento1 && tipo_filtro) {
                var lista_elemento_alvo = $(`#seletores #interagir ${elemento1} ${tipo_filtro} *`)
                $.each(lista_elemento_alvo, function (indexInArray, valueOfElement) {
                    elemento_alvo_Set.add(valueOfElement.localName)
                });
                document.getElementById("elemento-alvo").innerHTML = '<option value="" selected disabled>Elemento alvo</option>';
                elemento_alvo_Set.forEach(function (indexInArray, valueOfElement) {
                    $("#elemento-alvo").append(`<option value="${valueOfElement}">${valueOfElement}</option>`);
                })
            }

        };
        function filtrar() {
            let elemento1 = $("#elemento1").val();
            let tipo_filtro = $("#tipo_filtro").val();
            let elemento_alvo = $("#elemento-alvo").val();

            if (elemento1 && tipo_filtro && elemento_alvo) {
                var lista_elementos_filtrados = $(`#seletores #interagir ${elemento1} ${tipo_filtro} ${elemento_alvo}`)
                $.each(lista_elementos_filtrados, function (indexInArray, valueOfElement) {
                    $(valueOfElement).css({
                        border: "2px dotted red"
                    });
                });
            }

        }

        $('#elemento1, #tipo_filtro').change(function (e) { 
            e.preventDefault();
            preFiltrar()
        });

        $("#btn_filtrar").click(function (e) {
            e.preventDefault();
            filtrar();
        });
    }
});

