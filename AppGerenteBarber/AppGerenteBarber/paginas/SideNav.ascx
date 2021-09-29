<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="SideNav.ascx.cs" Inherits="AppCardapio.paginas.SideNav" %>

<!-- Sidebar -->
<ul class="navbar-nav sidebar sidebar-dark accordion bg-gradient-dark" id="accordionSidebar">

    <!-- Sidebar - Brand -->
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="Dashboard.aspx">
        <div class="sidebar-brand-icon">
            <i class="fas fa-hamburger"></i>
        </div>
        <div class="sidebar-brand-text mx-3">Brasa Admin</div>
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
        Cadastro serviços
    </div>
    <li class="nav-item">
        <a class="nav-link" href="ListaServicos.aspx?menu=tipoCategoria">
         <i class="fas fa-utensils"></i>
            <span>Lista serviços</span>
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="ListaCardapio.aspx?menu=categoria">
      <i class="fas fa-clipboard-list"></i>
            <span>Categoria</span>
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="ListaCardapio.aspx?menu=produto">
          <i class="fas fa-hamburger"></i>
            <span>Produto</span>
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="ListaCardapio.aspx?menu=preco">
        <i class="fas fa-coins"></i>
            <span>Preço</span>
        </a>
    </li>
    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block" />

    <div class="sidebar-heading">
        Cadastro franquias
    </div>


    <!-- Nav Item - Tables -->
    <li class="nav-item">
        <a class="nav-link" href="ListaFranquias.aspx?menu=franquias">
            <i class="fas fa-store-alt"></i>
            <span>Franquias</span>
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="ListaFranquias.aspx?menu=diaFuncionamento">
         <i class="far fa-calendar-alt"></i>
            <span>Dias funcionamento</span>
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="ListaFranquias.aspx?menu=horarioFuncionamento">
           <i class="fas fa-clock"></i>
            <span>Horários funcionamento</span>
        </a>
    </li>
    <hr class="sidebar-divider d-none d-md-block">
    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
    </div>
</ul>
<!-- End of Sidebar -->
