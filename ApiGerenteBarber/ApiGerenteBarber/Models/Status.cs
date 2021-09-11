﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ApiGerenteBarber.Models
{
    [Table("Status")]
    public class Status
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string DescricaoStatus { get; set; }
    }
}
