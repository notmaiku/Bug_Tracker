using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace bug_tracker.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private static string[] eGirls = new[]
        {
            "Dracuina", "Jasmine", "Glooglue", "AngelicaDove", "Otakugirl", "JessicaBum", "KutieKitten", "Chuu", "Jinni", "MEAT"
        };

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var rng = new Random();
            return Enumerable.Range(1, 6).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }

        [HttpGet("[action]")]
        public IEnumerable<EGirl> eGirlOfTheWeek()
        {
            var rng = new Random();
            return Enumerable.Range(1, 6).Select(index => new EGirl
            {
                hotnessRating = rng.Next(0, 10),
                name = eGirls[rng.Next(Summaries.Length)]
            });
        }

        public class EGirl
        {
            public int hotnessRating { get; set; }
            public string name { get; set; }
        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }
    }
}
