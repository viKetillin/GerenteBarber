using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ApiGerenteBarber.Data;
using ApiGerenteBarber.Models;

namespace ApiGerenteBarber.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdutoServicosController : ControllerBase
    {
        private readonly Contexto _context;

        public ProdutoServicosController(Contexto context)
        {
            _context = context;
        }

        // GET: api/ProdutoServicos
        [HttpGet("recuperarProdutosServicos")]
        public async Task<ActionResult<IEnumerable<ProdutoServico>>> GetProdutoServicos()
        {
            return await _context.ProdutoServicos.Include(f => f.Categoria).ToListAsync();
        }

        // GET: api/ProdutoServicos/5
        [HttpGet("recuperarProdutoServico")]
        public async Task<ActionResult<ProdutoServico>> GetProdutoServico(int id)
        {
            var produtoServico = await _context.ProdutoServicos.FindAsync(id);

            if (produtoServico == null)
            {
                return NotFound();
            }

            return produtoServico;
        }

        // PUT: api/ProdutoServicos/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("editarProdutoServico")]
        public async Task<IActionResult> PutProdutoServico(int id, ProdutoServico produtoServico)
        {
            if (id != produtoServico.Id)
            {
                return BadRequest();
            }

            _context.Entry(produtoServico).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProdutoServicoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ProdutoServicos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("adicionarProdutoServico")]
        public async Task<ActionResult<ProdutoServico>> PostProdutoServico(ProdutoServico produtoServico)
        {
            _context.ProdutoServicos.Add(produtoServico);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProdutoServico", new { id = produtoServico.Id }, produtoServico);
        }

        // DELETE: api/ProdutoServicos/5
        [HttpDelete("excluirProdutoServico")]
        public async Task<IActionResult> DeleteProdutoServico(int id)
        {
            var produtoServico = await _context.ProdutoServicos.FindAsync(id);
            if (produtoServico == null)
            {
                return NotFound();
            }

            _context.ProdutoServicos.Remove(produtoServico);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProdutoServicoExists(int id)
        {
            return _context.ProdutoServicos.Any(e => e.Id == id);
        }
    }
}
