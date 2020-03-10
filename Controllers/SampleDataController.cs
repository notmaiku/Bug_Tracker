using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;


namespace bug_tracker.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private readonly IConfiguration configuration;
        public SampleDataController(IConfiguration config)
        {
            this.configuration = config;
        }
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private static string[] eGirls = new[]
        {
            "Jasmine", "Dracuina", "Glooglue", "Angelica Dove", "Otaku girl", "Jessica Bum", "Kutie Kitten", "Chuu", "Jinni", "MEAT"
        };

        DataAccess db = new DataAccess();
        public List<Account> getAccounts()
        {
            var list = db.getUser();
            foreach (var item in list)
            {
                Console.WriteLine(item);
            }
            return list;
        }

        [HttpGet("[action]")]
        public IEnumerable<Account> Accounts()
        {
            return db.getUser();
        }
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
            return Enumerable.Range(0, 7).Select(index => new EGirl
            {
                name = eGirls[index],
                hotnessRating = rng.Next(0, 10)
            });
        }

        public class EGirl
        {
            public string name { get; set; }
            public int hotnessRating { get; set; }
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
