using System;
using System.Data;
using System.Linq;
using System.Data.SqlClient;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using Dapper;

namespace bug_tracker
{

    public class DataAccess
    {
        private readonly IDbConnection _dbConnection;

        public DataAccess(IDbConnection dbConnection)
        {
            _dbConnection = dbConnection;
        }
        
        public List<Account> getUser()
        {
            using (IDbConnection connection = new SqlConnection()
            {
                var output = connection.Query<Account>($"select Username from sample").ToList();
                return output;
            }
        }
    }
}