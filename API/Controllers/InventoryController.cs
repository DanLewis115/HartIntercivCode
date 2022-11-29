using API.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class InventoryController : ControllerBase
{
    private static readonly string[] Items = new[]
    {
        "Table", "Chair", "Desk", "Lamp", "Sofa", "Bed", "Cabinet", "Chest", "Clock", "Bookcase"
    };

    private readonly ILogger<InventoryController> _logger;

    public InventoryController(ILogger<InventoryController> logger)
    {
        _logger = logger;
    }

    [HttpGet("GetInventoryList")]
    public ActionResult<IEnumerable<ItemDto>> Get()
    {
        return Ok(Enumerable.Range(1, 10).Select(Index => new ItemDto
        {
            Description = Items[Random.Shared.Next(Items.Length)],
            Count = Random.Shared.Next(1, 10)
        })
        .ToArray());
    }
}
