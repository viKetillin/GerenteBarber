var idCliente = recuperarUrlParametro("id");

$(document).ready(function () {
    if (idCliente != null)
        recuperarDadosCliente();
});

function recuperarDadosCliente() {
    $.ajax({
        url: "https://localhost:44377/api/Clientes/recuperarCliente?id=" + parseFloat(idCliente),
        type: "GET",
        dataType: "json",
        success: function (result) {
            $("#inputDescricao").val(result.nomeCliente);
            $("#inputTelefone").val(result.telefoneCliente);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function adicionarCliente(e) {
    var type = null;
    var url = null;

    if (idCliente != "" && idCliente != null) {
        type = "PUT";
        url = "Clientes/editarCliente?id=" + parseFloat(idCliente);
    }
    else {
        type = "POST";
        url = "Clientes/adicionarCliente";
    }

    var cliente = {
        Id: idCliente != null ? parseFloat(idCliente) : 0,
        NomeCliente: $("#inputDescricao").val(),
        TelefoneCliente: $("#inputTelefone").val(),
    };

    $.ajax({
        type: type,
        contentType: "application/json",
        cache: false,
        url: urlApi + url,
        data: JSON.stringify(cliente),
        success: function (response) {
            if (idCliente != "" && idCliente != null)
                notificacaoSucesso("Cliente editado com sucesso.");
            else
                notificacaoSucesso("Cliente adicionado com sucesso.");
            listaCliente();
        },
        error: function () {
            notificacaoErro("Falha ao salvar o cliente.");
        }
    });
}

function listaCliente() {
    window.location.href = "ListaClientes.aspx?menu=clientes";
}