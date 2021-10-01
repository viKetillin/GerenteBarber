<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="SideNav.ascx.cs" Inherits="AppCardapio.paginas.SideNav" %>

<!-- Sidebar -->
<ul class="navbar-nav sidebar sidebar-dark accordion bg-gradient-dark" id="accordionSidebar">

    <!-- Sidebar - Brand -->
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="Dashboard.aspx">
        <div class="sidebar-brand-icon">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="75" height="75"
                viewBox="0 0 172 172"
                style="fill: #000000;">
                <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                    <path d="M0,172v-172h172v172z" fill="none"></path>
                    <g fill="#ffffff">
                        <path d="M70.4125,61.92c-5.01219,0 -9.60781,2.06938 -13.0075,5.4825c-0.17469,0.17469 -0.36281,0.34938 -0.5375,0.5375c-4.64937,4.91813 -19.14844,18.06 -31.0675,18.06c-8.34469,0 -16.89094,-1.72 -22.2525,-13.76c0,0 -4.71656,37.84 41.3875,37.84c16.67594,0 29.25344,-3.46687 37.5175,-11.61c0.43,-0.38969 0.88688,-0.7525 1.29,-1.1825c0.48375,-0.52406 0.84656,-1.04812 1.29,-1.6125c0.05375,-0.08062 0.16125,-0.13437 0.215,-0.215c0.25531,-0.33594 0.52406,-0.72562 0.7525,-1.075c0.28219,0.44344 0.65844,0.87344 0.9675,1.29c0.26875,0.33594 0.47031,0.645 0.7525,0.9675c0.56438,0.65844 1.1825,1.24969 1.8275,1.8275c8.26406,8.14313 20.84156,11.61 37.5175,11.61c46.10406,0 41.3875,-37.84 41.3875,-37.84c-5.36156,12.04 -13.90781,13.76 -22.2525,13.76c-11.91906,0 -26.41812,-13.14187 -31.0675,-18.06c-3.45344,-3.73562 -8.2775,-6.02 -13.545,-6.02c-6.46344,0 -12.13406,3.50719 -15.5875,8.815c-3.45344,-5.30781 -9.12406,-8.815 -15.5875,-8.815z"></path>
                    </g>
                </g></svg>
        </div>
        <div class="sidebar-brand-text mx-3">Gerente barber</div>
    </a>

    <!-- Divider -->
    <hr class="sidebar-divider my-0">

    <!-- Nav Item - Dashboard -->
    <li class="nav-item active">
        <a class="nav-link" href="Dashboard.aspx">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
        </a>
    </li>
    <hr class="sidebar-divider">
    <div class="sidebar-heading">
        Cadastro serviços/produtos
    </div>
    <li class="nav-item">
        <a class="nav-link" href="ListaServicos.aspx?menu=tipoCategoria">
            <i class="fas fa-clipboard-list"></i>
            <span>Tipos de categoria</span>
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="ListaServicos.aspx?menu=categoria">
            <i class="fas fa-clipboard-list"></i>
            <span>Categorias</span>
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="ListaServicos.aspx?menu=produto">
            <i class="far fa-handshake"></i>
            <span>Produtos / Serviços</span>
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="ListaServicos.aspx?menu=preco">
            <i class="fas fa-tasks"></i>
            <span>Pedidos</span>
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="ListaServicos.aspx?menu=preco">
            <i class="far fa-sticky-note"></i>
            <span>Ordens de serviço</span>
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="ListaServicos.aspx?menu=status">
            <i class="fas fa-circle"></i>
            <span>Status</span>
        </a>
    </li>
    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block" />

    <div class="sidebar-heading">
        Cadastro funcionários
    </div>
    <!-- Nav Item - Tables -->
    <li class="nav-item">
        <a class="nav-link" href="ListaFuncionarios.aspx?menu=funcionarios">
            <i class="fas fa-id-card"></i>
            <span>Funcionários</span>
        </a>
    </li>
    <hr class="sidebar-divider d-none d-md-block">
    <!-- Nav Item - Tables -->
    <div class="sidebar-heading">
        Cadastro clientes
    </div>
    <!-- Nav Item - Tables -->
    <li class="nav-item">
        <a class="nav-link" href="ListaClientes.aspx?menu=clientes">
            <i class="fas fa-user"></i>
            <span>Clientes</span>
        </a>
    </li>



    <!-- Sidebar Toggler (Sidebar) -->
      <hr class="sidebar-divider d-none d-md-block" />
    <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
    </div>
</ul>
<!-- End of Sidebar -->
