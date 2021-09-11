using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ApiGerenteBarber.Models
{
    [Table("ProdutoServico")]
    public class ProdutoServico
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string DescricaoProdutoServico { get; set; }

        [Required]
        public decimal Preco { get; set; }

        [ForeignKey("CategoriaId")]
        public Categoria Categoria { get; set; } 
        public int CategoriaId { get; set; }

    }
}
