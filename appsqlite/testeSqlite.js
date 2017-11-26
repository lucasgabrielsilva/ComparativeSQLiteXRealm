var exports = module.exports ={}

	exports.testeInserts = function(){
		var SQLite = require('react-native-sqlite-storage');
		const now = require("performance-now");

		var db = SQLite.openDatabase('bancoSqlite', '1.0', 'bdSqlite', '10240');

	    db.transaction(function(tx){
	      tx.executeSql("CREATE TABLE IF NOT EXISTS my (id INTEGER, nome VARCHAR)")
	    });

	    var id = 1;
	    var nome = 'pexe';

	    db.transaction(function(tx){
	      tx.executeSql('INSERT INTO my VALUES(?,?)', [id,nome]);
	    });

	    db.transaction(function(tx){
	      tx.executeSql('SELECT * FROM my', [], function(tx,resultado){
	        var row = resultado.rows.item(0);
	        alert(row['nome']);
	      });
	    });

		


	};