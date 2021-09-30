var idCategoria = recuperarUrlParametro("id");

$(document).ready(function () {
    recuperarCombos();
});

function recuperarCombos() {
    $.ajax({
        url: "https://localhost:44377/api/TipoCategorias/recuperarTiposCategoria",
        type: "GET",
        dataType: "json",
        success: function (result) {
            html = "";
            for (var i = 0; i < result.length; i++) {
                html += '<option value="' + result[i].id + '"> ' + result[i].descricaoTipoCategoria + ' </option>'
            }

            $("#selectTipoCategoria").append(html)
        },
        complete: function (result) {
            if (idCategoria != "" && idCategoria != null)
                recuperarDadosCategoria()
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function recuperarDadosCategoria() {
    $.ajax({
        url: "https://localhost:44377/api/Categorias/recuperarCategoria?id=" + parseFloat(idCategoria),
        type: "GET",
        dataType: "json",
        success: function (result) {
            $("#selectTipoCategoria").val(result.tipoCategoriaId);
            $("#inputDescricao").val(result.descricaoCategoria);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function adicionarTipoCategoria(e) {
    var type = null;
    var url = null;

    if (idCategoria != "" && idCategoria != null) {
        type = "PUT";
        url = "Categorias/editarCategoria?id=" + parseFloat(idCategoria);
    }
    else {
        type = "POST";
        url = "Categorias/adicionarCategoria";
    }

    var categoria = {
        Id: idCategoria != null ? parseFloat(idCategoria) : 0,
        DescricaoCategoria: $("#inputDescricao").val(),
        TipoCategoriaId: parseFloat($("#selectTipoCategoria").val())
    };

    $.ajax({
        type: type,
        contentType: "application/json",
        cache: false,
        url: urlApi + url,
        data: JSON.stringify(categoria),
        success: function (response) {
            if (idCategoria != "" && idCategoria != null)
                notificacaoSucesso("Categoria editada com sucesso.");
            else
                notificacaoSucesso("Categoria adicionada com sucesso.");
            listaServicos();
        },
        error: function () {
            notificacaoErro("Falha ao salvar a categoria.");
        }
    });
}

function cadastroTipoCategoria() {
    window.location.href = "CadastroTipoCategoria.aspx";
}

function listaServicos() {
    window.location.href = "listaServicos.aspx?menu=tipoCategoria";
}