﻿using Microsoft.EntityFrameworkCore;
using prodigy_fs_01.Server.Entity;

namespace prodigy_fs_01.Server.Data
{
    public class ApplicationDbContext : DbContext
    {

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        
        public DbSet<User> Users { get; set; }



        //protected override void OnModelCreating(ModelBuilder builder)
        //{
        //    base.OnModelCreating(builder);
        //    builder.HasDefaultSchema("Identity");
        //    builder.Entity<IdentityUser>(entity =>
        //    {
        //        entity.ToTable(name: "User");
        //    });
        //    builder.Entity<IdentityRole>(entity =>
        //    {
        //        entity.ToTable(name: "Role");
        //    });
        //    builder.Entity<IdentityUserRole<string>>(entity =>
        //    {
        //        entity.ToTable("UserRoles");
        //    });
        //    builder.Entity<IdentityUserClaim<string>>(entity =>
        //    {
        //        entity.ToTable("UserClaims");
        //    });
        //    builder.Entity<IdentityUserLogin<string>>(entity =>
        //    {
        //        entity.ToTable("UserLogins");
        //    });
        //    builder.Entity<IdentityRoleClaim<string>>(entity =>
        //    {
        //        entity.ToTable("RoleClaims");
        //    });
        //    builder.Entity<IdentityUserToken<string>>(entity =>
        //    {
        //        entity.ToTable("UserTokens");
        //    });
        //}
    }
}