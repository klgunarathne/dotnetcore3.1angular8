using house_rental.models;
using Microsoft.EntityFrameworkCore;

namespace house_rental.data
{
    public class ApplicationDbContext: DbContext
    {
        public DbSet<House> Houses { get; set; }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base (options) {}
        
    }
}