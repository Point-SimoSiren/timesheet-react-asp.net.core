using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactFrontilla.Models;

namespace ReactFrontilla.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        // Haetaan kaikki aktiiviset työntekijät

        [HttpGet]
        [Route("")]
        public List<Employees> GetAll()
        {
            tuntidbContext db = new tuntidbContext();

            var employees = from e in db.Employees
                            where e.Active == true
                            select e;

            return employees.ToList();

        }


        [HttpPost]
        [Route("")]
        public ActionResult CreateNew([FromBody] Employees emp)
        {
            tuntidbContext db = new tuntidbContext();
            try
            {

                db.Employees.Add(emp);
                db.SaveChanges();
                return Ok(emp.IdEmployee);
            }
            catch
            {
                return BadRequest("Adding employee failed");
            }
            finally
            {
                db.Dispose();
            }

        }
    }
}