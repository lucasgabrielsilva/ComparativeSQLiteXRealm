var exports = module.exports ={}

	exports.testeInserts = function(numInserts){
		var SQLite = require('react-native-sqlite-storage');
		const now = require("performance-now");

		var nome = 'teste';
		var j = 0;

		var db = SQLite.openDatabase('bancoSqlite');

	    db.transaction(function(tx){
	      tx.executeSql("CREATE TABLE tabela1 (id INTEGER, nome VARCHAR)")
	    });

//	    var start = now();
		console.log(' ---- Inicio da operação de ' + numInserts + ' Inserts ----');
	    for(var i = 0; i < numInserts; i++){
	    	db.transaction(function(tx){
	      		tx.executeSql('INSERT INTO tabela1 VALUES(?,?)', [i,nome]);
	      		console.log(" ---- Conclusão do inserts numero:  " + j++ + " ---- ");
	    	});
	    }

/*
	    var end = now();

	    db.transaction(function(tx){
	      tx.executeSql('SELECT * FROM tabela1', [], function(tx,resultado){
	      });
	    });

	    alert("Inicio: " + start + "\nTermino: " + end + "\nDiferença: " + (end-start));
*/
	};