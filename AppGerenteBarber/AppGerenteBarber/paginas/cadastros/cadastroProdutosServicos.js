var idProduto = recuperarUrlParametro("id");

$(document).ready(function () {
    recuperarCombo();
});

function recuperarCombo() {
    $.ajax({
        url: "https://localhost:44377/api/Categorias/recuperarCategorias",
        type: "GET",
        dataType: "json",
        success: function (result) {
            html = "";
            for (var i = 0; i < result.length; i++) {
                html += '<option value="' + result[i].id + '"> ' + result[i].descricaoCategoria + ' </option>'
            }

            $("#selectCategoria").append(html)
        },
        complete: function (result) {
            if (idProduto != "" && idProduto != null)
                recuperarDadosProdutos()
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function recuperarDadosProdutos() {
    $.ajax({
        url: "https://localhost:44377/api/ProdutoServicos/recuperarProdutoServico?id=" + parseFloat(idProduto),
        type: "GET",
        dataType: "json",
        success: function (result) {
            $("#inputDescricao").val(result.descricaoProdutoServico);
            $("#inputPreco").val(result.preco);
            $("#selectCategoria").val(result.categoriaId);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function adicionarProduto(e) {
    var type = null;
    var url = null;

    if (idProduto != "" && idProduto != null) {
        type = "PUT";
        url = "ProdutoServicos/editarProdutoServico?id=" + parseFloat(idProduto);
    }
    else {
        type = "POST";
        url = "ProdutoServicos/adicionarProdutoServico";
    }

    var produtoServico = {
        Id: idProduto != null ? parseFloat(idProduto) : 0,
        DescricaoProdutoServico: $("#inputDescricao").val(),
        Preco: $("#inputPreco").val(),
        CategoriaId: $("#selectCategoria").val(),
    };

    $.ajax({
        type: type,
        contentType: "application/json",
        cache: false,
        url: urlApi + url,
        data: JSON.stringify(produtoServico),
        success: function (response) {
            if (idProduto != "" && idProduto != null)
                notificacaoSucesso("Produto editado com sucesso.");
            else
                notificacaoSucesso("Produto adicionado com sucesso.");
            listaServicos();
        },
        error: function () {
            notificacaoErro("Falha ao salvar o produto.");
        }
    });
}

function listaServicos() {
    window.location.href = "ListaServicos.aspx?menu=produtos";
}

function cadastroCategoria() {
    window.location.href = "CadastroCategoria.aspx";
}

