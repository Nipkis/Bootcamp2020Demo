using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreBackend.Controllers
{
    [Route("api/Harjoitus1")]
    [ApiController]
    public class Harjoitus1Controller : ControllerBase
    {
        public int Luku()
        {
            return 123;
        }   
    }
}
