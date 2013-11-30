/*
 *
 * @author: Akank
 */

var Query = {
	"createTable" : "create table songs(id uuid primary key, title text, album text, artist text)",
	"dropTable"   : "drop table songs",
	"insertValue" : "insert into songs (id, title, album, artist) values (62c36092-82a1-3a00-93d1-46196ee77204, 'abc', 'abc','abc')",
	"listTable"   : "select * from songs",
	"queryTable"  : "select * from songs where title = 'abc'",
	"createIndex" : "create index on songs(title)"
};

module.exports = Query;
