using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ApiGerenteBarber.Models
{
    [Table("OrdemServico")]
    public class OrdemServico
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime Data { get; set; }

        [Required]
        [DataType(DataType.Time)]
        public DateTime Hora{get;set;}

        [Required]
        public decimal ValorTotal { get; set; }

        [DataType(DataType.Date)]
        public DateTime DataAtualizacao { get; set; }

        [ForeignKey("ClienteId")]
        public Cliente Cliente { get; set; }

        public int ClienteId { get; set; }

        [ForeignKey("FuncionarioId")]
        public Funcionario Funcionario { get; set; }
        public int FuncionarioId { get; set; }

        [ForeignKey("StatusId")]
        public Status Status { get; set; }
        public int StatusId { get; set; }        
    }
}
