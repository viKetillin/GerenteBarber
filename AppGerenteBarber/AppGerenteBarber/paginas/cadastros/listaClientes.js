var menu = recuperarUrlParametro("menu");

$(document).ready(function () {
    recuperarCliente();

    if (menu == "clientes") {
        $('.nav-tabs a[href="#cliente"]').tab('show');
        $("#btnCliente").show();
        $("#tituloPagina").text("Lista de clientes");
    }

    $(".nav-tabs").click(function () {
        if ($(".nav-tabs a[href='#cliente']").hasClass("active") == true) {
            $("#btnCliente").show();

            $("#tituloPagina").text("Lista de clientes");
        }
    });
});

function recuperarCliente() {
    $.ajax({
        url: recuperarUrlApi() + "Clientes/recuperarClientes",
        type: "GET",
        dataType: "json",
        success: function (result) {
            var html = "";
            for (var i = 0; i < result.length; i++) {
                html += ' <tr> ';
                html += '     <td>' + result[i].id + '</td> ';
                html += '     <td>' + result[i].nomeCliente + '</td> ';
                html += '     <td>' + result[i].telefoneCliente + '</td> ';
                html += '     <td><button class="btn btn-danger mr-2" onclick="cadastroCliente(' + result[i].id + ')"><i class="fas fa-pencil-alt"></i></button><button class="btn btn-secondary" onclick="excluirCliente(' + result[i].id + ')"><i class="far fa-trash-alt"></i></button></td> ';
                html += ' </tr> ';
            }
            $("#dadosCliente").html(html);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function excluirCliente(id) {
    $.when(mensagemConfirmacao("GERENTE BARBER", "Deseja excluir o cliente?")).then(function (confirmou) {
        if (confirmou) {
            $.ajax({
                url: recuperarUrlApi() + "Clientes/excluirCliente?id=" + parseInt(id),
                type: "DELETE",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({}),
                success: function (result) {
                    notificacaoSucesso("Cliente excluído com sucesso.");
                    recuperarCliente();
                },
                error: function (errormessage) {
                    notificacaoErro("Ocorreu um erro ao tentar excluir o cliente.");
                }
            });

        }
    });
}

function cadastroCliente(id) {
    if (id == null)
        window.location.href = 'CadastroCliente.aspx';
    else
        window.location.href = 'CadastroCliente.aspx?id=' + id;
}