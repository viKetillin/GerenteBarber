var menu = recuperarUrlParametro("menu");

$(document).ready(function () {
    recuperarTipoCategoria();
    recuperarCategorias();
    recuperarProdutos();
    recuperarOrdensServicos();
    recuperarStatus();

    if (menu == "tipoCategoria") {
        $('.nav-tabs a[href="#tipoCategoria"]').tab('show');
        $("#btnTipoCategoria").show();
        $("#tituloPagina").text("Lista tipo categorias");
    } else if (menu == "categoria") {
        $('.nav-tabs a[href="#categoria"]').tab('show');
        $("#btnCategoria").show();
        $("#tituloPagina").text("Lista categorias");
    } else if (menu == "produtos") {
        $('.nav-tabs a[href="#produtos"]').tab('show');
        $("#btnProdutos").show();
        $("#tituloPagina").text("Lista produtos / serviços");
    } else if (menu == "ordensServico") {
        $('.nav-tabs a[href="#ordemServico"]').tab('show');
        $("#btnOrdemServico").show();
        $("#tituloPagina").text("Lista ordens de serviço");
    } else if (menu == "status") {
        $('.nav-tabs a[href="#status"]').tab('show');
        $("#btnStatus").show();
        $("#tituloPagina").text("Lista status");
    }

    $(".nav-tabs").click(function () {
        if ($(".nav-tabs a[href='#tipoCategoria']").hasClass("active") == true) {
            $("#btnTipoCategoria").show();
            $("#btnCategoria").hide();
            $("#btnProdutos").hide();
            $("#btnOrdemServico").hide();
            $("#btnStatus").hide();

            $("#tituloPagina").text("Lista tipo categorias");
        } else if ($('.nav-tabs a[href="#categoria"]').hasClass("active") == true) {
            $("#btnTipoCategoria").hide();
            $("#btnCategoria").show();
            $("#btnProdutos").hide();
            $("#btnOrdemServico").hide();
            $("#btnStatus").hide();

            $("#tituloPagina").text("Lista categorias");
        } else if ($('.nav-tabs a[href="#produtos"]').hasClass("active") == true) {
            $("#btnTipoCategoria").hide();
            $("#btnCategoria").hide();
            $("#btnProdutos").show();
            $("#btnOrdemServico").hide();
            $("#btnStatus").hide();

            $("#tituloPagina").text("Lista status");
        } else if ($('.nav-tabs a[href="#ordemServico"]').hasClass("active") == true) {
            $("#btnTipoCategoria").hide();
            $("#btnCategoria").hide();
            $("#btnProdutos").hide();
            $("#btnOrdemServico").show();            
            $("#btnStatus").hide();

            $("#tituloPagina").text("Lista status");
        } else if ($('.nav-tabs a[href="#status"]').hasClass("active") == true) {
            $("#btnTipoCategoria").hide();
            $("#btnCategoria").hide();
            $("#btnProdutos").hide();
            $("#btnOrdemServico").hide();
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

function recuperarProdutos() {
    $.ajax({
        url: recuperarUrlApi() + "ProdutoServicos/recuperarProdutosServicos",
        type: "GET",
        dataType: "json",
        success: function (result) {
            var html = "";
            for (var i = 0; i < result.length; i++) {
                html += ' <tr> ';
                html += '     <td>' + result[i].id + '</td> ';
                html += '     <td>' + result[i].descricaoProdutoServico + '</td> ';
                html += '     <td>' + result[i].preco + '</td> ';
                html += '     <td>' + result[i].categoria.descricaoCategoria + '</td> ';
                html += '     <td><button class="btn btn-danger mr-2" onclick="cadastroProdutos(' + result[i].id + ')"><i class="fas fa-pencil-alt"></i></button><button class="btn btn-secondary" onclick="excluirProduto(' + result[i].id + ')"><i class="far fa-trash-alt"></i></button></td> ';
                html += ' </tr> ';
            }
            $("#dadosProdutos").html(html);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function excluirProduto(id) {
    $.when(mensagemConfirmacao("GERENTE BARBER", "Deseja excluir o produto / serviço?")).then(function (confirmou) {
        if (confirmou) {
            $.ajax({
                url: recuperarUrlApi() + "ProdutoServicos/excluirProdutoServico?id=" + parseInt(id),
                type: "DELETE",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({}),
                success: function (result) {
                    notificacaoSucesso("Produto / serviço excluído com sucesso.");
                    recuperarProdutos();
                },
                error: function (errormessage) {
                    notificacaoErro("Ocorreu um erro ao tentar excluir o produto / serviço.");
                }
            });

        }
    });
}

function recuperarOrdensServicos() {
    $.ajax({
        url: recuperarUrlApi() + "OrdemServicos/recuperarOrdensServicos",
        type: "GET",
        dataType: "json",
        success: function (result) {
            var html = "";
            for (var i = 0; i < result.length; i++) {
                var date = new Date(result[i].data);

                html += ' <tr> ';
                html += '     <td>' + result[i].id + '</td> ';
                html += '     <td>' + ("0" + date.getDate()).slice(-2) + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + '</td> ';
                html += '     <td>' + result[i].hora.slice(11, 16) + '</td> ';
                html += '     <td>' + result[i].valorTotal + '</td> ';
                html += '     <td>' + result[i].cliente.nomeCliente + '</td> ';
                html += '     <td>' + result[i].funcionario.nomeFuncionario + '</td> ';
                html += '     <td>' + result[i].status.descricaoStatus + '</td> ';
                html += '     <td><button class="btn btn-danger mr-2" onclick="cadastroOrdemServico(' + result[i].id + ')"><i class="fas fa-pencil-alt"></i></button><button class="btn btn-secondary" onclick="excluirOrdemServico(' + result[i].id + ')"><i class="far fa-trash-alt"></i></button></td> ';
                html += ' </tr> ';
            }
            $("#dadosOrdensServico").html(html);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function excluirOrdemServico(id) {
    $.when(mensagemConfirmacao("GERENTE BARBER", "Deseja excluir a ordem de serviço?")).then(function (confirmou) {
        if (confirmou) {
            $.ajax({
                url: recuperarUrlApi() + "OrdemServicos/excluirOrdemServico?id=" + parseInt(id),
                type: "DELETE",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({}),
                success: function (result) {
                    notificacaoSucesso("Ordem de serviço excluída com sucesso.");
                    recuperarOrdensServicos();
                },
                error: function (errormessage) {
                    notificacaoErro("Ocorreu um erro ao tentar excluir a ordem de serviço.");
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
                    recuperarStatus();
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

function cadastroProdutos(id) {
    if (id == null)
        window.location.href = 'cadastroProdutosServicos.aspx';
    else
        window.location.href = 'cadastroProdutosServicos.aspx?id=' + id;
}

function cadastroOrdemServico(id) {
    if (id == null)
        window.location.href = 'cadastroOrdemServico.aspx';
    else
        window.location.href = 'cadastroOrdemServico.aspx?id=' + id;
}

function cadastroStatus(id) {
    if (id == null)
        window.location.href = 'cadastroStatus.aspx';
    else
        window.location.href = 'cadastroStatus.aspx?id=' + id;
}

