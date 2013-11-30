/*
 *
 * @author : Akank
 */


var Helenus = require('../../node_modules/helenus/');

var Connection = {};

var connection = new Helenus.Connection({
	host:'127.0.0.1:9160',
	keyspace:'example'
});

Connection.getConnection = function() {
	return connection;
};

var pool;

Connection.pool = function(hosts, database) {
	if(!hosts)
	    console.log("No Host found");
	
	console.log("Connecting to hosts...");
	pool = new Helenus.ConnectionPool({
			hosts : hosts,
			keyspace : database
		});

	return pool;
};

module.exports = Connection;
