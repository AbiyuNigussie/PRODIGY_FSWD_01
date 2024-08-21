using prodigy_fs_01.Server.Entity;
using prodigy_fs_01.Server.Models;

namespace prodigy_fs_01.Server.Repositories
{
    public interface IUserService
    {
        IEnumerable<User> GetUsers();
        User GetUserbyId(int id);
        void PutUser(int id, UpdateUser user);
        User PostUser(User create, string Password);
        void DeleteUser(User user);
        public bool IsExist(int id);
    }
}
