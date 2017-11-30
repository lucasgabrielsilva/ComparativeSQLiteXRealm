var exports = module.exports ={}

var SQLite = require('react-native-sqlite-storage');
var db;

	exports.testeInserts = function(numInserts){
		const now = require("performance-now");

		var nome = 'teste';
		var j = 0;

		db = SQLite.openDatabase('bancoSqlite');

	    db.transaction(function(tx){
	      tx.executeSql('CREATE TABLE tabela1 (id INTEGER PRIMARY KEY, a VARCHAR, b VARCHAR, c VARCHAR, d VARCHAR, e VARCHAR' +
	      	', f VARCHAR, g VARCHAR, h VARCHAR, i VARCHAR, j VARCHAR, k VARCHAR, l VARCHAR, m VARCHAR' + 
	      	', n VARCHAR, o VARCHAR, p VARCHAR, q VARCHAR, r VARCHAR, s VARCHAR, t VARCHAR, u VARCHAR' + 
	      	', v VARCHAR, x VARCHAR, w VARCHAR, y VARCHAR, z VARCHAR)');
	    });

//	    var start = now();
		console.log(' ---- Inicio da operação de ' + numInserts + ' Inserts ----');
	    for(var i = 0; i < numInserts; i++){
	    	db.transaction(function(tx){
	      		tx.executeSql('INSERT INTO tabela1 VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [j++,nome,nome,nome,nome,nome,nome,nome,nome,nome,nome,nome,nome,nome,nome,nome,nome,nome,nome,nome,nome,nome,nome,nome,nome,nome,nome]);
	      		console.log(" ---- Conclusao do inserts numero:  " + j + " ---- ");
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

	exports.excluir = function(){

		

		SQLite.deleteDatabase('bancoSqlite');
	}