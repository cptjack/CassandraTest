/*
 *
 * @author : Akank
 */


var Helenus = require('../../node_modules/helenus/');

var Connection = {};

/*
 * connection for one instance
 */
var connection = new Helenus.Connection({
	host:'127.0.0.1:9160',
	keyspace:'example'
});

/*
 * method to return connection object
 */
Connection.getConnection = function() {
	return connection;
};

/*
 * method to return a pool of connected servers
 */
Connection.pool = function(hosts, database) {
	if(!hosts)
	    console.log("No Host found");
	
	if(!database)
	    console.log("No database provided");
	
	var pool;
	if(hosts && database) {
	   console.log("Connecting to hosts...");
	   pool = new Helenus.ConnectionPool({
			hosts : hosts,
			keyspace : database
	   });
	}

	return pool;
};

module.exports = Connection;
