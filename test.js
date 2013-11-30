/*
 *
 * @author: Akank
 */


var Connection = require('./Connection');
var Query = require('./Query');
var Hosts = require('./Hosts');

var cqlStatement = Query.queryTable;//insertValue;//listTable;//insertValue;//createTable;//dropTable;//"create table songs(id uuid primary key,title text,album text,artist text)";
			//"select * from system.schema_keyspaces";

var hosts = Hosts.getHosts();
var conn = {};
conn = Connection.pool(hosts, 'example');
/*
conn = function() {
	if(hosts && hosts.length > 0)
	   return Connection.pool(hosts, 'example');
	else
	   console.log('No hosts listed');

};//Connection.getConnection();
*/
function bench(callback){
  if(conn) {
  	conn.connect(function(err, keyspace){
    	   if(err){
             throw(err);
   	   }
         
           console.log('Connection Successful');  
           console.log(cqlStatement);
           // conn.cql(Query.createIndex);    
           if(cqlStatement) {
		var result = conn.cql(cqlStatement, function(err, result) {
	           if(err)
			console.log('Error : ' + err);
	      	   if(result)	
	        	tableData(result);
           	});
	   } else {
	   	console.log('Empty cql statement');
	   }

           conn.close();
        });
  } else {
  	console.log('Connection could not be established');
  }	
}

function tableData(data) {
	data.forEach(function(row) {
		row.forEach(function(column, value, timeStamp) {
			//console.log(value + " | ");
			console.log(column  + "  |  " + value + "  |  " + timeStamp);
		});
	});
}

bench(function(){
  console.log('Done');
});
