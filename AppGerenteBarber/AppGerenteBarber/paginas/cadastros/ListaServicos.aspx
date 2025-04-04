﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ListaServicos.aspx.cs" Inherits="AppGerenteBarber.paginas.cadastros.ListaServicos" %>

<%@ Register TagPrefix="UserControl" TagName="SideNav" Src="~/paginas/SideNav.ascx" %>
<%@ Register TagPrefix="UserControl" TagName="NavBar" Src="~/paginas/NavBar.ascx" %>
<%@ Register TagPrefix="UserControl" TagName="Footer" Src="~/paginas/Footer.ascx" %>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Gerente barber - Cadastro serviços</title>

    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">

    <!-- Fontes google -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="../../assets/estilos/sb-admin-2.min.css" rel="stylesheet" />
    <link href="../../assets/estilos/global.css" rel="stylesheet" />
    <link href="../../assets/estilos/global.css" rel="stylesheet" />
</head>

<body id="page-top" class="administrativo">
    <div id="wrapper">
        <UserControl:SideNav ID="SideNav" runat="Server" />
        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
                <UserControl:NavBar ID="NavBar" runat="Server" />

                <div class="container-fluid">
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800" id="tituloPagina"></h1>
                    </div>
                    <div class="row">
                        <div class="col-xl-12 col-lg-12">
                            <div class="card shadow mb-4">
                                <div class="card-body">
                                    <ul class="nav nav-tabs">
                                        <li class="nav-item">
                                            <a class="nav-link active" data-bs-toggle="tab" href="#tipoCategoria">Tipo categoria</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" data-bs-toggle="tab" href="#categoria">Categoria</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" data-bs-toggle="tab" href="#produtos">Produtos / Serviços</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" data-bs-toggle="tab" href="#pedidos">Pedidos</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" data-bs-toggle="tab" href="#ordemServico">Ordens de serviço</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" data-bs-toggle="tab" href="#status">Status</a>
                                        </li>

                                        <button class="btn btn-secondary ml-auto mb-1" style="display: none;" id="btnTipoCategoria" onclick="cadastroTipoCategoria()"><i class="fas fa-plus mr-2"></i>Adicionar tipo categoria</button>
                                        <button class="btn btn-secondary ml-auto mb-1" style="display: none;" id="btnCategoria" onclick="cadastroCategoria()"><i class="fas fa-plus mr-2"></i>Adicionar categoria</button>
                                        <button class="btn btn-secondary ml-auto mb-1" style="display: none;" id="btnProdutos" onclick="cadastroProdutos()"><i class="fas fa-plus mr-2"></i>Produtos / Serviços</button>   
                                        <button class="btn btn-secondary ml-auto mb-1" style="display: none;" id="btnPedidos" onclick="cadastroPedidos()"><i class="fas fa-plus mr-2"></i>Pedidos</button>
                                        <button class="btn btn-secondary ml-auto mb-1" style="display: none;" id="btnOrdemServico" onclick="cadastroOrdemServico()"><i class="fas fa-plus mr-2"></i>Adicionar ordem de serviço</button>
                                        <button class="btn btn-secondary ml-auto mb-1" style="display: none;" id="btnStatus" onclick="cadastroStatus()"><i class="fas fa-plus mr-2"></i>Status</button>
                                    </ul>
                                    <div class="tab-content">
                                        <div id="tipoCategoria" class="tab-pane fade in active show">
                                            <div class="card-body">
                                                <div class="table-responsive">
                                                    <table class="table table-bordered" width="100%" cellspacing="0">
                                                        <thead>
                                                            <tr>
                                                                <th>Id</th>
                                                                <th>Tipo categoria</th>
                                                                <th>Ações</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="dadosTipoCategoria">
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="categoria" class="tab-pane fade">
                                            <div class="card-body">
                                                <div class="table-responsive">
                                                    <table class="table table-bordered" width="100%" cellspacing="0">
                                                        <thead>
                                                            <tr>
                                                                <th>Id</th>
                                                                <th>Categoria</th>
                                                                <th>Tipo categoria</th>
                                                                <th>Ações</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="dadosCategoria">
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="produtos" class="tab-pane fade">
                                            <div class="card-body">
                                                <div class="table-responsive">
                                                    <table class="table table-bordered" width="100%" cellspacing="0">
                                                        <thead>
                                                            <tr>
                                                                <th>Id</th>
                                                                <th>Produto / Serviço</th>
                                                                <th>Valor</th>
                                                                <th>Categoria</th>
                                                                <th>Ações</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="dadosProdutos">
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div> 
                                        <div id="pedidos" class="tab-pane fade">
                                            <div class="card-body">
                                                <div class="table-responsive">
                                                    <table class="table table-bordered" width="100%" cellspacing="0">
                                                        <thead>
                                                            <tr>
                                                                <th>Id</th>
                                                                <th>Data</th>
                                                                <th>Hora</th>
                                                                <th>Produto</th>
                                                                <th>Valor</th>
                                                                <th>Cliente</th>
                                                                <th>Funcionário</th>
                                                                <th>Status</th>
                                                                <th>Ações</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="dadosPedidos">
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="ordemServico" class="tab-pane fade">
                                            <div class="card-body">
                                                <div class="table-responsive">
                                                    <table class="table table-bordered" width="100%" cellspacing="0">
                                                        <thead>
                                                            <tr>
                                                                <th>Id</th>
                                                                <th>Data</th>
                                                                <th>Hora</th>
                                                                <th>Valor</th>
                                                                <th>Cliente</th>
                                                                <th>Funcionário</th>
                                                                <th>Status</th>
                                                                <th>Ações</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="dadosOrdensServico">
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="status" class="tab-pane fade">
                                            <div class="card-body">
                                                <div class="table-responsive">
                                                    <table class="table table-bordered" width="100%" cellspacing="0">
                                                        <thead>
                                                            <tr>
                                                                <th>Id</th>
                                                                <th>Status</th>
                                                                <th>Ações</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="dadosStatus">
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <UserControl:Footer ID="Footer" runat="Server" />
            </div>
        </div>
    </div>


    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

    <!-- Logout Modal-->
    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a class="btn btn-dark" href="login.html">Logout</a>
                </div>
            </div>
        </div>
    </div>

    <!-- Bootstrap core JavaScript-->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" integrity="sha384-eMNCOe7tC1doHpGoWe/6oMVemdAVTMs2xqW4mwXrXsW0L84Iytr2wi5v2QjrP/xp" crossorigin="anonymous"></script>

    <script src="../../assets/js/jquery.easing.min.js"></script>

    <script src="https://kit.fontawesome.com/61c3c13db3.js" crossorigin="anonymous"></script>


    <!-- Custom scripts for all pages-->
    <script src="../../assets/js/sb-admin-2.js"></script>
    <script src="../../assets/js/global.js"></script>
    <script src="listaServicos.js"></script>
</body>
</html>
