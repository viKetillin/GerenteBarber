var idFuncionario = recuperarUrlParametro("id");

$(document).ready(function () {
    if (idFuncionario != null)
        recuperarDadosFuncionario();
});

function recuperarDadosFuncionario() {
    $.ajax({
        url: "https://localhost:44377/api/Funcionarios/recuperarFuncionario?id=" + parseFloat(idFuncionario),
        type: "GET",
        dataType: "json",
        success: function (result) {
            $("#inputDescricao").val(result.nomeFuncionario);
            $("#inputTelefone").val(result.telefoneFuncionario);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function adicionarFuncionario(e) {
    var type = null;
    var url = null;

    if (idFuncionario != "" && idFuncionario != null) {
        type = "PUT";
        url = "Funcionarios/editarFuncionario?id=" + parseFloat(idFuncionario);
    }
    else {
        type = "POST";
        url = "Funcionarios/adicionarFuncionario";
    }

    var funcionario = {
        Id: idFuncionario != null ? parseFloat(idFuncionario) : 0,
        NomeFuncionario: $("#inputDescricao").val(),
        TelefoneFuncionario: $("#inputTelefone").val(),
    };

    $.ajax({
        type: type,
        contentType: "application/json",
        cache: false,
        url: urlApi + url,
        data: JSON.stringify(funcionario),
        success: function (response) {
            if (idFuncionario != "" && idFuncionario != null)
                notificacaoSucesso("Funcionário editado com sucesso.");
            else
                notificacaoSucesso("Funcionário adicionado com sucesso.");
            listaFuncionario();
        },
        error: function () {
            notificacaoErro("Falha ao salvar o funcionário.");
        }
    });
}

function listaFuncionario() {
    window.location.href = "ListaFuncionarios.aspx?menu=funcionarios";
}