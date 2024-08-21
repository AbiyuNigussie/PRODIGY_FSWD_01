using prodigy_fs_01.Server.Entity;
using prodigy_fs_01.Server.Models;

namespace prodigy_fs_01.Server.Repositories
{
    public interface IAuthService
    {
        User Authenticate(AuthUser auth);

        string Generate(User user);
    }
}
