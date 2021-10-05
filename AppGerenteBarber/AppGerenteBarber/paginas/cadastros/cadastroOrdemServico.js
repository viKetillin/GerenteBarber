var idOrdemServico = recuperarUrlParametro("id");

$(document).ready(function () {
    recuperarCombos();
});

function recuperarCombos() {
    $.ajax({
        url: "https://localhost:44377/api/Clientes/recuperarClientes",
        type: "GET",
        dataType: "json",
        success: function (result) {
            html = "";
            for (var i = 0; i < result.length; i++) {
                html += '<option value="' + result[i].id + '"> ' + result[i].nomeCliente + ' </option>'
            }

            $("#selectCliente").append(html)
        },
        complete: function (result) {
            if (idOrdemServico != "" && idOrdemServico != null)
                recuperarDadosProdutos()
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });

    $.ajax({
        url: "https://localhost:44377/api/Funcionarios/recuperarFuncionarios",
        type: "GET",
        dataType: "json",
        success: function (result) {
            html = "";
            for (var i = 0; i < result.length; i++) {
                html += '<option value="' + result[i].id + '"> ' + result[i].nomeFuncionario + ' </option>'
            }

            $("#selectFuncionario").append(html)
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });

    $.ajax({
        url: "https://localhost:44377/api/Status/recuperarStatus",
        type: "GET",
        dataType: "json",
        success: function (result) {
            html = "";
            for (var i = 0; i < result.length; i++) {
                html += '<option value="' + result[i].id + '"> ' + result[i].descricaoStatus + ' </option>'
            }

            $("#selectStatus").append(html)
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function recuperarDadosProdutos() {
    $.ajax({
        url: "https://localhost:44377/api/OrdemServicos/recuperarOrdemServico?id=" + parseFloat(idOrdemServico),
        type: "GET",
        dataType: "json",
        success: function (result) {
            $("#inputData").val(toDateEn(result.data));
            $("#inputHora").val(result.hora.slice(11, 16));
            $("#inputValorTotal").val(result.valorTotal);
            $("#selectCliente").val(result.clienteId);
            $("#selectFuncionario").val(result.funcionarioId);
            $("#selectStatus").val(result.statusId);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function adicionarOrdemServico(e) {
    var type = null;
    var url = null;

    if (idOrdemServico != "" && idOrdemServico != null) {
        type = "PUT";
        url = "OrdemServicos/editarOrdemServico?id=" + parseFloat(idOrdemServico);
    }
    else {
        type = "POST";
        url = "OrdemServicos/adicionarOrdemServico";
    }

    var horas = ($("#inputHora").val()).slice(0, 2)
    var minutos = ($("#inputHora").val()).slice(3, 5)

    var horario = new Date();
    (horario.setHours(horas, minutos)).toLocaleString();

    var data = $("#inputData").val();

    var ordemServico = {
        Id: idOrdemServico != null ? parseFloat(idOrdemServico) : 0,
        Data: toDate(data),
        Hora: toIsoString(horario),        
        ValorTotal: $("#inputValorTotal").val(),
        DataAtualizacao: new Date(),
        ClienteId: $("#selectCliente").val(),
        FuncionarioId: $("#selectFuncionario").val(),
        StatusId: $("#selectStatus").val(),
    };

    $.ajax({
        type: type,
        contentType: "application/json",
        cache: false,
        url: urlApi + url,
        data: JSON.stringify(ordemServico),
        success: function (response) {
            if (idOrdemServico != "" && idOrdemServico != null)
                notificacaoSucesso("Ordem de serviço editada com sucesso.");
            else
                notificacaoSucesso("Ordem de serviço adicionada com sucesso.");
            listaServicos();
        },
        error: function () {
            notificacaoErro("Falha ao salvar a ordem de serviço.");
        }
    });
}

function listaServicos() {
    window.location.href = "ListaServicos.aspx?menu=ordensServico";
}

function cadastroCliente() {
    window.location.href = "CadastroCliente.aspx";
}
function cadastroFuncionario() {
    window.location.href = "CadastroFuncionario.aspx";
}
function cadastroStatus() {
    window.location.href = "CadastroStatus.aspx";
}

