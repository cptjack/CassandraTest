/*
 *
 * @author: Akank
 */


var Connection = require('./Connection');
var Query = require('./Query');
var times = 100000, completed = 0, i = 0, vals,
    cqlStatement = Query.queryTable;//insertValue;//listTable;//insertValue;//createTable;//dropTable;//"create table songs(id uuid primary key,title text,album text,artist text)";
			//"select * from system.schema_keyspaces";

var hosts = ['127.0.0.1:9160','127.0.0.2:9160'];
var conn = Connection.pool(hosts, 'example');//Connection.getConnection();

function bench(callback){
  conn.connect(function(err, keyspace){
    if(err){
      throw(err);
    }
    console.log('Connection Successful');  
     console.log(cqlStatement);
     conn.cql(Query.createIndex);    
     var result = conn.cql(cqlStatement, function(err, result) {
	if(err)
		console.log('Error : ' + err);
	if(result)	
	   tableData(result);
     });

    conn.close();
  }); 
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
