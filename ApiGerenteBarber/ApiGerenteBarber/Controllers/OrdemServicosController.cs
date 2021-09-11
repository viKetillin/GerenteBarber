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
    public class OrdemServicosController : ControllerBase
    {
        private readonly Contexto _context;

        public OrdemServicosController(Contexto context)
        {
            _context = context;
        }

        // GET: api/OrdemServicos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<OrdemServico>>> GetOrdemServicos()
        {
            return await _context.OrdemServicos.ToListAsync();
        }

        // GET: api/OrdemServicos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<OrdemServico>> GetOrdemServico(int id)
        {
            var ordemServico = await _context.OrdemServicos.FindAsync(id);

            if (ordemServico == null)
            {
                return NotFound();
            }

            return ordemServico;
        }

        // PUT: api/OrdemServicos/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrdemServico(int id, OrdemServico ordemServico)
        {
            if (id != ordemServico.Id)
            {
                return BadRequest();
            }

            _context.Entry(ordemServico).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrdemServicoExists(id))
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

        // POST: api/OrdemServicos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<OrdemServico>> PostOrdemServico(OrdemServico ordemServico)
        {
            _context.OrdemServicos.Add(ordemServico);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOrdemServico", new { id = ordemServico.Id }, ordemServico);
        }

        // DELETE: api/OrdemServicos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrdemServico(int id)
        {
            var ordemServico = await _context.OrdemServicos.FindAsync(id);
            if (ordemServico == null)
            {
                return NotFound();
            }

            _context.OrdemServicos.Remove(ordemServico);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool OrdemServicoExists(int id)
        {
            return _context.OrdemServicos.Any(e => e.Id == id);
        }
    }
}
