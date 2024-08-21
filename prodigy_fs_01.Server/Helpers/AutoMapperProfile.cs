using AutoMapper;
using prodigy_fs_01.Server.Entity;
using prodigy_fs_01.Server.Models;

namespace prodigy_fs_01.Server.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile() {
            CreateMap<User, UserModel>();
            CreateMap<RegisterUser, User>();
            CreateMap<UpdateUser, User>();
        }
    }
}
