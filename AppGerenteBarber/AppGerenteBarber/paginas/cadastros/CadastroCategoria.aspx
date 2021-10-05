<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="CadastroCategoria.aspx.cs" Inherits="AppGerenteBarber.paginas.cadastros.CadastroCategoria" %>

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

    <title>Gerente barber - Cadastro tipo categoria</title>

    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">

    <!-- Fontes google -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="../../assets/estilos/sb-admin-2.min.css" rel="stylesheet" />
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
                        <h1 class="h3 mb-0 text-gray-800">Cadastro categoria</h1>
                    </div>
                    <div class="row">
                        <div class="col-xl-12 col-lg-12">
                            <div class="card shadow mb-4">
                                <div class="card-body">
                                    <div class="col-lg-6 col-md-12 col-sm-12">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="inputDescricao" placeholder="Nome categoria">
                                            <label for="inputDescricao">Categoria</label>
                                        </div>
                                        <div class="divSelect mt-2">
                                            <select class="form-select" aria-label="Select tipo categoria" id="selectTipoCategoria">
                                                <option selected>Selecione tipo categoria</option>
                                            </select>
                                            <button class="btn btn-dark ml-2" onclick="cadastroTipoCategoria()">Novo tipo categoria</button>
                                        </div>
                                        <div class="mt-2">
                                            <button class="btn btn-success mr-2" onclick="adicionarTipoCategoria()">Salvar</button>
                                            <button class="btn btn-secondary" onclick="listaServicos()">Cancelar</button>
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
    <script src="cadastroCategoria.js"></script>
</body>
</html>

