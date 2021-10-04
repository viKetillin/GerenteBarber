var idStatus = recuperarUrlParametro("id");

$(document).ready(function () {
    if (idStatus != null)
        recuperarDadosStatus();
});

function recuperarDadosStatus() {
    $.ajax({
        url: "https://localhost:44377/api/Status/recuperarStatusId?id=" + parseFloat(idStatus),
        type: "GET",
        dataType: "json",
        success: function (result) {
            $("#inputDescricao").val(result.descricaoStatus);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function adicionarStatus(e) {
    var type = null;
    var url = null;

    if (idStatus != "" && idStatus != null) {
        type = "PUT";
        url = "Status/editarStatus?id=" + parseFloat(idStatus);
    }
    else {
        type = "POST";
        url = "Status/adicionarStatus";
    }

    var status = {
        Id: idStatus != null ? parseFloat(idStatus) : 0,
        DescricaoStatus: $("#inputDescricao").val(),
    };

    $.ajax({
        type: type,
        contentType: "application/json",
        cache: false,
        url: urlApi + url,
        data: JSON.stringify(status),
        success: function (response) {
            if (idStatus != "" && idStatus != null)
                notificacaoSucesso("Status editado com sucesso.");
            else
                notificacaoSucesso("Status adicionado com sucesso.");
            listaServicos();
        },
        error: function () {
            notificacaoErro("Falha ao salvar o status.");
        }
    });
}

function listaServicos() {
    window.location.href = "listaServicos.aspx?menu=status";
}