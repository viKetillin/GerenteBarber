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
    public class TipoCategoriasController : ControllerBase
    {
        private readonly Contexto _context;

        public TipoCategoriasController(Contexto context)
        {
            _context = context;
        }

        // GET: api/TipoCategorias
        [HttpGet("recuperarTiposCategoria")]
        public async Task<ActionResult<IEnumerable<TipoCategoria>>> GetTiposCategorias()
        {
            return await _context.TiposCategorias.ToListAsync();
        }

        // GET: api/TipoCategorias/5
        [HttpGet("recuperarTipoCategoria")]
        public async Task<ActionResult<TipoCategoria>> GetTipoCategoria(int id)
        {
            var tipoCategoria = await _context.TiposCategorias.FindAsync(id);

            if (tipoCategoria == null)
            {
                return NotFound();
            }

            return tipoCategoria;
        }

        // PUT: api/TipoCategorias/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("editarTipoCategoria")]
        public async Task<IActionResult> PutTipoCategoria(int id, TipoCategoria tipoCategoria)
        {
            if (id != tipoCategoria.Id)
            {
                return BadRequest();
            }

            _context.Entry(tipoCategoria).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TipoCategoriaExists(id))
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

        // POST: api/TipoCategorias
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("adicionarTipoCategoria")]
        public async Task<ActionResult<TipoCategoria>> PostTipoCategoria(TipoCategoria tipoCategoria)
        {
            _context.TiposCategorias.Add(tipoCategoria);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTipoCategoria", new { id = tipoCategoria.Id }, tipoCategoria);
        }

        // DELETE: api/TipoCategorias/5
        [HttpDelete("excluirTipoCategoria")]
        public async Task<IActionResult> DeleteTipoCategoria(int id)
        {
            var tipoCategoria = await _context.TiposCategorias.FindAsync(id);
            if (tipoCategoria == null)
            {
                return NotFound();
            }

            _context.TiposCategorias.Remove(tipoCategoria);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TipoCategoriaExists(int id)
        {
            return _context.TiposCategorias.Any(e => e.Id == id);
        }
    }
}
