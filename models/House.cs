namespace house_rental.models
{
    public class House
    {
        public int Id { get; set; }
        public string City { get; set; }
        public int BedRooms { get; set; }
        public int Guest { get; set; }
        public int Beds { get; set; }
        public int RentPerNight { get; set; }
        public string Type { get; set; }
    }
}