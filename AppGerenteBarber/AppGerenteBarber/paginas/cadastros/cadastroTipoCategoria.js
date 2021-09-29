var idCardapio = recuperarUrlParametro("id");

$(document).ready(function () {
    recuperarCombos();
});

function recuperarCombos() {
    $.ajax({
        url: "https://localhost:44393/api/ProdutoPrecos/recuperarProdutoPrecos",
        type: "GET",
        dataType: "json",
        success: function (result) {
            html = "";
            for (var i = 0; i < result.length; i++) {
                html += '<option value="' + result[i].id + '"> ' + result[i].produto.nomeProduto + ' - R$ ' + (result[i].valor).toFixed(2) + ' </option>'
            }

            $("#selectProduto").append(html)
        },
        complete: function (result) {
            if (idCardapio != "" && idCardapio != null)
                recuperarDadosCardapio()
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });

    $.ajax({
        url: "https://localhost:44393/api/Franquias/recuperarFranquias",
        type: "GET",
        dataType: "json",
        success: function (result) {
            html = "";
            for (var i = 0; i < result.length; i++) {
                html += '<option value="' + result[i].id + '"> ' + result[i].cidade + ' </option>'
            }

            $("#selectFranquia").append(html)
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function recuperarDadosCardapio() {
    $.ajax({
        url: "https://localhost:44393/api/Cardapios/recuperarCardapio?id=" + parseFloat(idCardapio),
        type: "GET",
        dataType: "json",
        success: function (result) {
            $("#selectProduto").val(result.produtoPrecoId);
            $("#selectFranquia").val(result.franquiaId);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function adicionarCardapio(e) {

    var type = null;
    var url = null;

    if (idCardapio != "" && idCardapio != null) {
        type = "PUT";
        url = "Cardapios/editarCardapio?id=" + parseFloat(idCardapio);
    }
    else {
        type = "POST";
        url = "Cardapios/adicionarCardapio";
    }

    var cardapio = {
        Id: idCardapio != null ? parseFloat(idCardapio) : 0,
        ProdutoPrecoId: $("#selectProduto").val(),
        FranquiaId: $("#selectFranquia").val(),
    };

    $.ajax({
        type: type,
        contentType: "application/json",
        cache: false,
        url: urlApi + url,
        data: JSON.stringify(cardapio),
        success: function (response) {
            if (idCardapio != "" && idCardapio != null)
                notificacaoSucesso("Cardápio editado com sucesso.");
            else
                notificacaoSucesso("Cardápio adicionado com sucesso.");
            listaCardapio();
        },
        error: function () {
            notificacaoErro("Falha ao salvar o cardápio.");
        }
    });
}

function listaCardapio() {
    window.location.href = "listaCardapio.aspx?menu=cardapio";
}

function cadastroPrecoProduto() {
    window.location.href = 'CadastroPreco.aspx';
}

function cadastroFranquia() {
    window.location.href = 'CadastroFranquia.aspx';
}