using ApiGerenteBarber.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiGerenteBarber.Data
{
    public class Contexto : DbContext
    {
        public Contexto(DbContextOptions<Contexto> options) : base(options)
        {
            
        }

        public DbSet<Categoria> Categorias { get; set; }
        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Funcionario> Funcionarios { get; set; }
        public DbSet<OrdemServico> OrdemServicos { get; set; }
        public DbSet<Pedido> Pedidos { get; set; }
        public DbSet<ProdutoServico> ProdutoServicos { get; set; }
        public DbSet<Status> Status { get; set; }
        public DbSet<TipoCategoria> TiposCategorias { get; set; }
    }   
}

