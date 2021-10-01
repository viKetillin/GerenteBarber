var menu = recuperarUrlParametro("menu");

$(document).ready(function () {
    recuperarfuncionarios();

    if (menu == "funcionarios") {
        $('.nav-tabs a[href="#funcionario"]').tab('show');
        $("#btnFuncionarios").show();
        $("#tituloPagina").text("Lista funcionários");
    } 

    $(".nav-tabs").click(function () {
        if ($(".nav-tabs a[href='#funcionario']").hasClass("active") == true) {
            $("#btnFuncionarios").show();

            $("#tituloPagina").text("Lista funcionários");
        }
    });
});

function recuperarfuncionarios() {
    $.ajax({
        url: recuperarUrlApi() + "Funcionarios/recuperarFuncionarios",
        type: "GET",
        dataType: "json",
        success: function (result) {
            var html = "";
            for (var i = 0; i < result.length; i++) {
                html += ' <tr> ';
                html += '     <td>' + result[i].id + '</td> ';
                html += '     <td>' + result[i].nomeFuncionario + '</td> ';
                html += '     <td>' + result[i].telefoneFuncionario + '</td> ';
                html += '     <td><button class="btn btn-danger mr-2" onclick="cadastroFuncionarios(' + result[i].id + ')"><i class="fas fa-pencil-alt"></i></button><button class="btn btn-secondary" onclick="excluirfuncionarios(' + result[i].id + ')"><i class="far fa-trash-alt"></i></button></td> ';
                html += ' </tr> ';
            }
            $("#dadosfuncionarios").html(html);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function excluirfuncionarios(id) {
    $.when(mensagemConfirmacao("GERENTE BARBER", "Deseja excluir o funcionário?")).then(function (confirmou) {
        if (confirmou) {
            $.ajax({
                url: recuperarUrlApi() + "Funcionarios/excluirFuncionario?id=" + parseInt(id),
                type: "DELETE",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({}),
                success: function (result) {
                    notificacaoSucesso("Funcionário excluído com sucesso.");
                    recuperarfuncionarios();
                },
                error: function (errormessage) {
                    notificacaoErro("Ocorreu um erro ao tentar excluir o funcionário.");
                }
            });

        }
    });
}

function cadastroFuncionarios(id) {
    if (id == null)
        window.location.href = 'CadastroFuncionario.aspx';
    else
        window.location.href = 'CadastroFuncionario.aspx?id=' + id;
}