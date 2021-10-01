var menu = recuperarUrlParametro("menu");

$(document).ready(function () {
    recuperarTipoCategoria();
    recuperarCategorias();
    //recuperarHorariosFuncionamento();

    if (menu == "tipoCategoria") {
        $('.nav-tabs a[href="#tipoCategoria"]').tab('show');
        $("#btnTipoCategoria").show();
        $("#tituloPagina").text("Lista tipo categorias");
    } else if (menu == "categoria") {
        $('.nav-tabs a[href="#categoria"]').tab('show');
        $("#btnCategoria").show();
        $("#tituloPagina").text("Lista categorias");
    } else if (menu == "status") {
        $('.nav-tabs a[href="#status"]').tab('show');
        $("#btnStatus").show();
        $("#tituloPagina").text("Lista status");
    }

    $(".nav-tabs").click(function () {
        if ($(".nav-tabs a[href='#tipoCategoria']").hasClass("active") == true) {
            $("#btnTipoCategoria").show();
            $("#btnCategoria").hide();
            $("#btnStatus").hide();

            $("#tituloPagina").text("Lista tipo categorias");
        }
        else if ($('.nav-tabs a[href="#categoria"]').hasClass("active") == true) {
            $("#btnTipoCategoria").hide();
            $("#btnCategoria").show();
            $("#btnStatus").hide();

            $("#tituloPagina").text("Lista categorias");
        }
        else if ($('.nav-tabs a[href="#status"]').hasClass("active") == true) {
            $("#btnTipoCategoria").hide();
            $("#btnCategoria").hide();
            $("#btnStatus").show();

            $("#tituloPagina").text("Lista status");
        }
    });
});

function recuperarTipoCategoria() {
    $.ajax({
        url: recuperarUrlApi() + "TipoCategorias/recuperarTiposCategoria",
        type: "GET",
        dataType: "json",
        success: function (result) {
            var html = "";
            for (var i = 0; i < result.length; i++) {
                html += ' <tr> ';
                html += '     <td>' + result[i].id + '</td> ';
                html += '     <td>' + result[i].descricaoTipoCategoria + '</td> ';
                html += '     <td><button class="btn btn-danger mr-2" onclick="cadastroTipoCategoria(' + result[i].id + ')"><i class="fas fa-pencil-alt"></i></button><button class="btn btn-secondary" onclick="excluirTipoCategoria(' + result[i].id + ')"><i class="far fa-trash-alt"></i></button></td> ';
                html += ' </tr> ';
            }
            $("#dadosTipoCategoria").html(html);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function excluirTipoCategoria(id) {
    $.when(mensagemConfirmacao("GERENTE BARBER", "Deseja excluir o tipo de categoria?")).then(function (confirmou) {
        if (confirmou) {
            $.ajax({
                url: recuperarUrlApi() + "TipoCategorias/excluirTipoCategoria?id=" + parseInt(id),
                type: "DELETE",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({}),
                success: function (result) {
                    notificacaoSucesso("Tipo de categoria excluído com sucesso.");
                    recuperarTipoCategoria();
                },
                error: function (errormessage) {
                    notificacaoErro("Ocorreu um erro ao tentar excluir o tipo de categoria.");
                }
            });

        }
    });
}

function recuperarCategorias() {
    $.ajax({
        url: recuperarUrlApi() + "Categorias/recuperarCategorias",
        type: "GET",
        dataType: "json",
        success: function (result) {
            var html = "";
            for (var i = 0; i < result.length; i++) {
                html += ' <tr> ';
                html += '     <td>' + result[i].id + '</td> ';
                html += '     <td>' + result[i].descricaoCategoria + '</td> ';
                html += '     <td>' + result[i].tipoCategoria.descricaoTipoCategoria + '</td> ';
                html += '     <td><button class="btn btn-danger mr-2" onclick="cadastroCategoria(' + result[i].id + ')"><i class="fas fa-pencil-alt"></i></button><button class="btn btn-secondary" onclick="excluirCategoria(' + result[i].id + ')"><i class="far fa-trash-alt"></i></button></td> ';
                html += ' </tr> ';
            }
            $("#dadosCategoria").html(html);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function excluirCategoria(id) {
    $.when(mensagemConfirmacao("GERENTE BARBER", "Deseja excluir a categoria?")).then(function (confirmou) {
        if (confirmou) {
            $.ajax({
                url: recuperarUrlApi() + "Categorias/excluirCategoria?id=" + parseInt(id),
                type: "DELETE",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({}),
                success: function (result) {
                    notificacaoSucesso("Categoria excluída com sucesso.");
                    recuperarCategorias();
                },
                error: function (errormessage) {
                    notificacaoErro("Ocorreu um erro ao tentar excluir a categoria.");
                }
            });

        }
    });
}

function recuperarStatus() {
    $.ajax({
        url: recuperarUrlApi() + "Status/recuperarStatus",
        type: "GET",
        dataType: "json",
        success: function (result) {
            var html = "";
            for (var i = 0; i < result.length; i++) {
                html += ' <tr> ';
                html += '     <td>' + result[i].id + '</td> ';
                html += '     <td>' + result[i].descricaoStatus + '</td> ';
                html += '     <td><button class="btn btn-danger mr-2" onclick="cadastroStatus(' + result[i].id + ')"><i class="fas fa-pencil-alt"></i></button><button class="btn btn-secondary" onclick="excluirStatus(' + result[i].id + ')"><i class="far fa-trash-alt"></i></button></td> ';
                html += ' </tr> ';
            }
            $("#dadosStatus").html(html);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function excluirStatus(id) {
    $.when(mensagemConfirmacao("GERENTE BARBER", "Deseja excluir o status?")).then(function (confirmou) {
        if (confirmou) {
            $.ajax({
                url: recuperarUrlApi() + "Status/excluirStatus?id=" + parseInt(id),
                type: "DELETE",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({}),
                success: function (result) {
                    notificacaoSucesso("Status excluído com sucesso.");
                    recuperarTipoCategoria();
                },
                error: function (errormessage) {
                    notificacaoErro("Ocorreu um erro ao tentar excluir o status.");
                }
            });

        }
    });
}

function cadastroTipoCategoria(id) {
    if (id == null)
        window.location.href = 'CadastroTipoCategoria.aspx';
    else
        window.location.href = 'CadastroTipoCategoria.aspx?id=' + id;
}

function cadastroCategoria(id) {
    if (id == null)
        window.location.href = 'CadastroCategoria.aspx';
    else
        window.location.href = 'CadastroCategoria.aspx?id=' + id;
}

function cadastroStatus(id) {
    if (id == null)
        window.location.href = 'cadastroStatus.aspx';
    else
        window.location.href = 'cadastroStatus.aspx?id=' + id;
}

