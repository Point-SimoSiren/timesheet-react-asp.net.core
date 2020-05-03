using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ReactFrontilla.Models
{
    public partial class tuntidbContext : DbContext
    {
        public tuntidbContext()
        {
        }

        public tuntidbContext(DbContextOptions<tuntidbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Contractors> Contractors { get; set; }
        public virtual DbSet<Customers> Customers { get; set; }
        public virtual DbSet<Employees> Employees { get; set; }
        public virtual DbSet<Timesheet> Timesheet { get; set; }
        public virtual DbSet<WorkAssignments> WorkAssignments { get; set; }
        

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Contractors>(entity =>
            {
                entity.HasKey(e => e.IdContractor);

                entity.Property(e => e.IdContractor).HasColumnName("Id_Contractor");

                entity.Property(e => e.CompanyName).HasMaxLength(50);

                entity.Property(e => e.ContactPerson).HasMaxLength(50);

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.DeletedAt).HasColumnType("datetime");

                entity.Property(e => e.EmailAddress).HasMaxLength(50);

                entity.Property(e => e.LastModifiedAt).HasColumnType("datetime");

                entity.Property(e => e.PhoneNumber).HasMaxLength(50);

                entity.Property(e => e.VatId).HasMaxLength(50);
            });

            modelBuilder.Entity<Customers>(entity =>
            {
                entity.HasKey(e => e.IdCustomer);

                entity.Property(e => e.IdCustomer).HasColumnName("Id_Customer");

                entity.Property(e => e.ContactName).HasMaxLength(50);

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.CustomerName).HasMaxLength(50);

                entity.Property(e => e.DeletedAt).HasColumnType("datetime");

                entity.Property(e => e.EmailAddress).HasMaxLength(50);

                entity.Property(e => e.LastModifiedAt).HasColumnType("datetime");

                entity.Property(e => e.PhoneNumber).HasMaxLength(50);
            });

            modelBuilder.Entity<Employees>(entity =>
            {
                entity.HasKey(e => e.IdEmployee);

                entity.Property(e => e.IdEmployee).HasColumnName("Id_Employee");

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.DeletedAt).HasColumnType("datetime");

                entity.Property(e => e.EmailAddress).HasMaxLength(50);

                entity.Property(e => e.FirstName).HasMaxLength(50);

                entity.Property(e => e.IdContractor).HasColumnName("Id_Contractor");

                entity.Property(e => e.LastModifiedAt).HasColumnType("datetime");

                entity.Property(e => e.LastName).HasMaxLength(50);

                entity.Property(e => e.PhoneNumber).HasMaxLength(50);

                entity.HasOne(d => d.IdContractorNavigation)
                    .WithMany(p => p.Employees)
                    .HasForeignKey(d => d.IdContractor)
                    .HasConstraintName("FK_Employees_Contractors");
            });

            modelBuilder.Entity<Timesheet>(entity =>
            {
                entity.HasKey(e => e.IdTimesheet);

                entity.Property(e => e.IdTimesheet).HasColumnName("Id_Timesheet");

                entity.Property(e => e.Comments).HasMaxLength(1000);

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.DeletedAt).HasColumnType("datetime");

                entity.Property(e => e.IdContractor).HasColumnName("Id_Contractor");

                entity.Property(e => e.IdCustomer).HasColumnName("Id_Customer");

                entity.Property(e => e.IdEmployee).HasColumnName("Id_Employee");

                entity.Property(e => e.IdWorkAssignment).HasColumnName("Id_WorkAssignment");

                entity.Property(e => e.LastModifiedAt).HasColumnType("datetime");

                entity.Property(e => e.StartTime).HasColumnType("datetime");

                entity.Property(e => e.StopTime).HasColumnType("datetime");

                entity.HasOne(d => d.IdContractorNavigation)
                    .WithMany(p => p.Timesheet)
                    .HasForeignKey(d => d.IdContractor)
                    .HasConstraintName("FK_Timesheet_Contractor");

                entity.HasOne(d => d.IdCustomerNavigation)
                    .WithMany(p => p.Timesheet)
                    .HasForeignKey(d => d.IdCustomer)
                    .HasConstraintName("FK_Timesheet_Customers");

                entity.HasOne(d => d.IdEmployeeNavigation)
                    .WithMany(p => p.Timesheet)
                    .HasForeignKey(d => d.IdEmployee)
                    .HasConstraintName("FK_Timesheet_Employee");

                entity.HasOne(d => d.IdWorkAssignmentNavigation)
                    .WithMany(p => p.Timesheet)
                    .HasForeignKey(d => d.IdWorkAssignment)
                    .HasConstraintName("FK_Timesheet_WorkAssignment");
            });

            modelBuilder.Entity<WorkAssignments>(entity =>
            {
                entity.HasKey(e => e.IdWorkAssignment);

                entity.Property(e => e.IdWorkAssignment).HasColumnName("Id_WorkAssignment");

                entity.Property(e => e.CompletedAt).HasColumnType("datetime");

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.Deadline).HasColumnType("datetime");

                entity.Property(e => e.DeletedAt).HasColumnType("datetime");

                entity.Property(e => e.Description).HasMaxLength(1000);

                entity.Property(e => e.IdCustomer).HasColumnName("Id_Customer");

                entity.Property(e => e.LastModifiedAt).HasColumnType("datetime");

                entity.Property(e => e.Title).HasMaxLength(100);

                entity.Property(e => e.WorkStartedAt).HasColumnType("datetime");

                entity.HasOne(d => d.IdCustomerNavigation)
                    .WithMany(p => p.WorkAssignments)
                    .HasForeignKey(d => d.IdCustomer)
                    .HasConstraintName("FK_WorkAssignments_Customers");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
