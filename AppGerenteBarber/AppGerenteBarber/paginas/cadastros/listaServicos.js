var menu = recuperarUrlParametro("menu");

$(document).ready(function () {
    recuperarFranquias();
    recuperarDiasFuncionamento();
    recuperarHorariosFuncionamento();

    if (menu == "tipoCategoria") {
        $('.nav-tabs a[href="#tipoCategoria"]').tab('show');
        $("#btnTipoCategoria").show();
        $("#tituloPagina").text("Lista tipo categorias");
    } else if (menu == "diaFuncionamento") {
        $('.nav-tabs a[href="#diaFuncionamento"]').tab('show');
        $("#btnDiasFuncionamento").show();
        $("#tituloPagina").text("Lista dias funcionamento");
    } else if (menu == "horarioFuncionamento") {
        $('.nav-tabs a[href="#horarioFuncionamento"]').tab('show');
        $("#btnHorariosFuncionamento").show();
        $("#tituloPagina").text("Lista horários funcionamento");
    }

    $(".nav-tabs").click(function () {
        if ($(".nav-tabs a[href='#franquias']").hasClass("active") == true) {
            $("#btnFranquias").show();
            $("#btnDiasFuncionamento").hide();
            $("#btnHorariosFuncionamento").hide();

            $("#tituloPagina").text("Lista franquias");
        }
        else if ($('.nav-tabs a[href="#diaFuncionamento"]').hasClass("active") == true) {
            $("#btnFranquias").hide();
            $("#btnDiasFuncionamento").show();
            $("#btnHorariosFuncionamento").hide();

            $("#tituloPagina").text("Lista dias funcionamento");
        }
        else if ($('.nav-tabs a[href="#horarioFuncionamento"]').hasClass("active") == true) {
            $("#btnFranquias").hide();
            $("#btnDiasFuncionamento").hide();
            $("#btnHorariosFuncionamento").show();

            $("#tituloPagina").text("Lista horários funcionamento");
        }
    });
});

function recuperarFranquias() {
    $.ajax({
        url: recuperarUrlApi() + "Franquias/recuperarFranquias",
        type: "GET",
        dataType: "json",
        success: function (result) {
            var html = "";
            for (var i = 0; i < result.length; i++) {
                html += ' <tr> ';
                html += '     <td>' + result[i].id + '</td> ';
                html += '     <td>' + result[i].cidade + '</td> ';
                html += '     <td>' + result[i].endereco + '</td> ';
                html += '     <td><button class="btn btn-danger mr-2" onclick="cadastroFranquias(' + result[i].id + ')"><i class="fas fa-pencil-alt"></i></button><button class="btn btn-secondary" onclick="excluirFranquia(' + result[i].id + ')"><i class="far fa-trash-alt"></i></button></td> ';
                html += ' </tr> ';
            }
            $("#dadosFranquia").html(html);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function excluirFranquia(id) {
    $.when(mensagemConfirmacao("BRASA HAMBURGUERIA", "Deseja excluir a franquia?")).then(function (confirmou) {
        if (confirmou) {
            $.ajax({
                url: recuperarUrlApi() + "Franquias/excluirFranquia?id=" + parseInt(id),
                type: "DELETE",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({}),
                success: function (result) {
                    notificacaoSucesso("Franquia excluída com sucesso.");
                    recuperarFranquias();
                },
                error: function (errormessage) {
                    notificacaoErro("Ocorreu um erro ao tentar excluir a franquia.");
                }
            });

        }
    });
}

function recuperarDiasFuncionamento() {
    $.ajax({
        url: recuperarUrlApi() + "DiasFuncionamentos/recuperarDiasFuncionamento",
        type: "GET",
        dataType: "json",
        success: function (result) {
            var html = "";
            for (var i = 0; i < result.length; i++) {
                html += ' <tr> ';
                html += '     <td>' + result[i].id + '</td> ';
                html += '     <td>' + result[i].franquia.cidade + '</td> ';
                html += '     <td>' + diaSemana[result[i].diaSemana] + '</td> ';
                if (result[i].aberto == true)
                    html += ' <td> Sim </td> ';
                else
                    html += ' <td> Não </td> ';
                html += '     <td><button class="btn btn-danger mr-2" onclick="cadastroDiasFuncionamento(' + result[i].id + ')"><i class="fas fa-pencil-alt"></i></button><button class="btn btn-secondary" onclick="excluirDiasFuncionamento(' + result[i].id + ')"><i class="far fa-trash-alt"></i></button></td> ';
                html += ' </tr> ';
            }
            $("#dadosDiaFuncionamento").html(html);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function excluirDiasFuncionamento(id) {
    $.when(mensagemConfirmacao("BRASA HAMBURGUERIA", "Deseja excluir o dia de funcionamento?")).then(function (confirmou) {
        if (confirmou) {
            $.ajax({
                url: recuperarUrlApi() + "DiasFuncionamentos/excluirDiaFuncionamento?id=" + parseInt(id),
                type: "DELETE",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({}),
                success: function (result) {
                    notificacaoSucesso("Dia de funcionamento excluído com sucesso.");
                    recuperarDiasFuncionamento();
                },
                error: function (errormessage) {
                    notificacaoErro("Ocorreu um erro ao tentar excluir o dia de funcionamento.");
                }
            });

        }
    });
}

function recuperarHorariosFuncionamento() {
    $.ajax({
        url: recuperarUrlApi() + "HorariosFuncionamento/recuperarHorarioFuncionamento",
        type: "GET",
        dataType: "json",
        success: function (result) {
            var html = "";
            for (var i = 0; i < result.length; i++) {
                html += ' <tr> ';
                html += '     <td>' + result[i].id + '</td> ';
                html += '     <td>' + diaSemana[result[i].diaFuncionamento.diaSemana] + '</td> ';
                if (result[i].horaInicio != null)
                    html += '     <td>' + result[i].horaInicio.slice(11, 16) + '</td> ';
                else
                    html += '     <td> </td> ';

                if (result[i].horaFim != null)
                    html += '     <td>' + result[i].horaFim.slice(11, 16) + '</td> ';
                else
                    html += '     <td> </td> ';
                html += '     <td><button class="btn btn-danger mr-2" onclick="cadastroHorariosFuncionamento(' + result[i].id + ')"><i class="fas fa-pencil-alt"></i></button><button class="btn btn-secondary" onclick="excluirHorarioFuncionamento(' + result[i].id + ')"><i class="far fa-trash-alt"></i></button></td> ';
                html += ' </tr> ';
            }
            $("#dadosHorarioFuncionamento").html(html);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function excluirHorarioFuncionamento(id) {
    $.when(mensagemConfirmacao("BRASA HAMBURGUERIA", "Deseja excluir o horário de funcionamento?")).then(function (confirmou) {
        if (confirmou) {
            $.ajax({
                url: recuperarUrlApi() + "HorariosFuncionamento/excluirHorarioFuncionamento?id=" + parseInt(id),
                type: "DELETE",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({}),
                success: function (result) {
                    notificacaoSucesso("Horário de funcionamento excluído com sucesso.");
                    recuperarHorariosFuncionamento();
                },
                error: function (errormessage) {
                    notificacaoErro("Ocorreu um erro ao tentar excluir o horário de funcionamento.");
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

function cadastroDiasFuncionamento(id) {
    if (id == null)
        window.location.href = 'CadastroDiaFuncionamento.aspx';
    else
        window.location.href = 'CadastroDiaFuncionamento.aspx?id=' + id;
}

function cadastroHorariosFuncionamento(id) {
    if (id == null)
        window.location.href = 'CadastroHorariosFuncionamento.aspx';
    else
        window.location.href = 'CadastroHorariosFuncionamento.aspx?id=' + id;
}

