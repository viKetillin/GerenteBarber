using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ApiGerenteBarber.Models
{
    [Table("Pedido")]
    public class Pedido
    {
        [Key]
        public int IdPedido { get; set; }

        [ForeignKey("OrdemServicoId")]
        public OrdemServico OrdemServico { get; set; }
        public int OrdemServicoId { get; set; }

        [ForeignKey("ProdutoServicoId")]
        public ProdutoServico ProdutoServico { get; set; }
        public int ProdutoServicoId { get; set; }
    }
}
