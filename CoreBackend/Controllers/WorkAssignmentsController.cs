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
    public class WorkAssignmentsController : ControllerBase
    {

        [HttpGet]
        [Route("")]
        public List<WorkAssignments> GetAll()
        {
            tuntidbContext db = new tuntidbContext();

            var workAssignments = from wa in db.WorkAssignments
                                  where wa.Active == true
                                  select wa;

            return workAssignments.ToList();

        }

        
        [HttpPost]
        [Route("")]
        public ActionResult CreateNew([FromBody] WorkAssignments workAssignment)
        {
            tuntidbContext db = new tuntidbContext();
            try
            {

                db.WorkAssignments.Add(workAssignment);
                db.SaveChanges();
                return Ok(workAssignment.IdWorkAssignment);
            }
            catch
            {
                return BadRequest("Adding work assignment failed");
            }
            finally
            {
                db.Dispose();
            }

        }

    }
}