using AutoMapper;
using house_rental.Controllers.Resources;
using house_rental.models;

namespace house_rental.mapping
{
    public class MappingProfile: Profile
    {
        public MappingProfile()
        {
            // api resources to Domain
            CreateMap<House, HouseResources>();

            // Domain to api resources
            CreateMap<HouseResources, House>()
            .ForMember(h => h.Id, opt => opt.Ignore());
        }
        
    }
}