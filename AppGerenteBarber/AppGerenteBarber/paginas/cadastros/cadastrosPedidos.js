var idPedido = recuperarUrlParametro("id");

$(document).ready(function () {
    recuperarCombos();
});

function recuperarCombos() {
    $.ajax({
        url: "https://localhost:44377/api/OrdemServicos/recuperarOrdensServicos",
        type: "GET",
        dataType: "json",
        success: function (result) {
            html = "";
            for (var i = 0; i < result.length; i++) {
                var date = new Date(result[i].data);

                html += '<option value="' + result[i].id + '"> <b>Data:</b> ' + ("0" + date.getDate()).slice(-2) + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' <b>Hora:</b> ' + result[i].hora.slice(11, 16) + ' <b>Cliente:</b> ' + result[i].cliente.nomeCliente + '</option>'
            }

            $("#selecOrdemServico").append(html)
        },
        complete: function (result) {
            if (idPedido != "" && idPedido != null)
                recuperarDadosPedidos()
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });

    $.ajax({
        url: "https://localhost:44377/api/ProdutoServicos/recuperarProdutosServicos",
        type: "GET",
        dataType: "json",
        success: function (result) {
            html = "";
            for (var i = 0; i < result.length; i++) {
                html += '<option value="' + result[i].id + '"> ' + result[i].descricaoProdutoServico + '</option>'
            }

            $("#selectProdutoServico").append(html)
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function recuperarDadosPedidos() {
    $.ajax({
        url: "https://localhost:44377/api/Pedidos/recuperarPedido?id=" + parseFloat(idPedido),
        type: "GET",
        dataType: "json",
        success: function (result) {
            $("#selecOrdemServico").val(result.ordemServicoId);
            $("#selectProdutoServico").val(result.produtoServicoId);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function adicionarPedido(e) {
    var type = null;
    var url = null;

    if (idPedido != "" && idPedido != null) {
        type = "PUT";
        url = "Pedidos/editarPedido?id=" + parseFloat(idPedido);
    }
    else {
        type = "POST";
        url = "Pedidos/adicionarPedido";
    }

    var pedido = {
        IdPedido: idPedido != null ? parseFloat(idPedido) : 0,
        OrdemServicoId: parseFloat($("#selecOrdemServico").val()),
        ProdutoServicoId: parseFloat($("#selectProdutoServico").val())
    };

    $.ajax({
        type: type,
        contentType: "application/json",
        cache: false,
        url: urlApi + url,
        data: JSON.stringify(pedido),
        success: function (response) {
            if (idPedido != "" && idPedido != null)
                notificacaoSucesso("Registro alterado com sucesso.");
            else
                notificacaoSucesso("Registro adicionado com sucesso.");
            listaServicos();
        },
        error: function () {
            notificacaoErro("Falha ao salvar o registro.");
        }
    });
}

function cadastroOrdemServico() {
    window.location.href = "CadastroOrdemServico.aspx";
}

function cadastroProdutoServico() {
    window.location.href = "CadastroProdutosServicos.aspx";
}

function listaServicos() {
    window.location.href = "listaServicos.aspx?menu=pedidos";
}