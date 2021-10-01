var idTipoCategoria = recuperarUrlParametro("id");

$(document).ready(function () {
    if (idTipoCategoria != null)
    recuperarDadosCardapio();
});

function recuperarDadosCardapio() {
    $.ajax({
        url: "https://localhost:44377/api/TipoCategorias/recuperarTipoCategoria?id=" + parseFloat(idTipoCategoria),
        type: "GET",
        dataType: "json",
        success: function (result) {
            $("#inputDescricao").val(result.descricaoTipoCategoria);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function adicionarTipoCategoria(e) {
    var type = null;
    var url = null;

    if (idTipoCategoria != "" && idTipoCategoria != null) {
        type = "PUT";
        url = "TipoCategorias/editarTipoCategoria?id=" + parseFloat(idTipoCategoria);
    }
    else {
        type = "POST";
        url = "TipoCategorias/adicionarTipoCategoria";
    }

    var tipoCategoria = {
        Id: idTipoCategoria != null ? parseFloat(idTipoCategoria) : 0,
        DescricaoTipoCategoria: $("#inputDescricao").val(),
    };

    $.ajax({
        type: type,
        contentType: "application/json",
        cache: false,
        url: urlApi + url,
        data: JSON.stringify(tipoCategoria),
        success: function (response) {
            if (idTipoCategoria != "" && idTipoCategoria != null)
                notificacaoSucesso("Tipo de categoria editada com sucesso.");
            else
                notificacaoSucesso("Tipo de categoria adicionada com sucesso.");
            listaServicos();
        },
        error: function () {
            notificacaoErro("Falha ao salvar o tipo de categoria.");
        }
    });
}

function listaServicos() {
    window.location.href = "listaServicos.aspx?menu=tipoCategoria";
}