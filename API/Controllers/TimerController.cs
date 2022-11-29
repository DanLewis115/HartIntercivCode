using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TimerController : ControllerBase
{
    private readonly ILogger<TimerController> _logger;

    public TimerController(ILogger<TimerController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public ActionResult<int> GetTimer()
    {
        Console.WriteLine("Starting Timer");
        return Ok(90);
    }

    [HttpPut]
    public ActionResult FinishTimer()
    {
        Console.WriteLine("Timer Finished");
        return NoContent();
    }
}
