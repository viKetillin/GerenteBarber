using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ApiGerenteBarber.Models
{
    [Table("Categoria")]
    public class Categoria
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string DescricaoCategoria { get; set; }

        [ForeignKey("TipoCategoriaId")]
        public TipoCategoria TipoCategoria { get; set; }
        public int TipoCategoriaId{ get; set; }
    }
}
