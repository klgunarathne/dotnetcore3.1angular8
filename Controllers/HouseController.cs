using System.Linq;
using AutoMapper;
using house_rental.Controllers.Resources;
using house_rental.data;
using house_rental.models;
using Microsoft.AspNetCore.Mvc;

namespace house_rental.Controllers
{
    [Route("/api/house")]
    [ApiController]
    public class HouseController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;
        public HouseController(ApplicationDbContext _context, IMapper _mapper)
        {
            this._mapper = _mapper;
            this._context = _context;
        }

        [HttpGet]
        public IActionResult GetHouses()
        {
            return Ok(_context.Houses.ToList());
        }

        [HttpGet("{id}")]
        public IActionResult GetHouse(int id)
        {
            return Ok(_context.Houses.Where(h => h.Id == id));
        }

        [HttpPost]
        public IActionResult AddHouse([FromBody] HouseResources house)
        {
            var newHouse = _mapper.Map<HouseResources, House>(house);
            _context.Houses.Add(newHouse);
            _context.SaveChanges();

            return Ok(newHouse);
        }

        [HttpPut("{id}")]
        public IActionResult EditHouse(int id, [FromBody] HouseResources house)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            var houseInDb = _context.Houses.Where(h => h.Id == id).SingleOrDefault();

            if (houseInDb == null)
                return NotFound();

            var a = _mapper.Map<HouseResources, House>(house, houseInDb);
            _context.SaveChanges();

            return Ok(a);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteHouse(int id)
        {
            var houseInDb = _context.Houses.Where(h => h.Id == id).SingleOrDefault();

            if (houseInDb == null)
                return NotFound();

            _context.Houses.Remove(houseInDb);
            _context.SaveChanges();

            return Ok(id);
        }
    }
}