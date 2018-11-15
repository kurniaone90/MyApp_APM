let ConnectionSqlServer = require('tedious').Connection;
let RequestSqlServer 	= require('tedious').Request;
let config 				= require("../../config/database");
let connection 			= new ConnectionSqlServer(config.databaseSQLServer);

// function executeStatement() {
// 	request = new RequestSqlServer("SELECT NamaRuangan FROM Ruangan WHERE NamaRuangan = 'Poliklinik PPTB'", function(err, rowCount) {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			// var endTime = process.hrtime(startTime);
// 			// console.log(rowCount + ' rows');
// 			return rowCount;
// 			// console.log(endTime);
// 			// console.log('rows');
// 		}
// 		connection.close();
// 	});

// 	request.on('row', function(columns) {
// 		columns.forEach(function(column) {
// 			if (column.value === null) {
// 				console.log('NULL');
// 			} else {
// 				console.log(column.value);
// 			}
// 		});
// 	});

// 	connection.execSql(request);
// }

// let data = connection.on('connect', function(err) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		// executeStatement();
// 		// console.log('Koneksi Berhasil')
// 	}
// });

// Start::Query Database //
	function index(data){
		// return data;
		// console.log(data);
		connection.on('connect', function(err) {
			if (err) {
				return "Connection Failed";
				// console.log(err);
			} else {
				var result = []; 
 
			    var request = new RequestSqlServer("select * form Ruangan", function(err,count,rows){ 
			        console.log(result); 
			    }); 
			    request.on("row", function (columns) { 
			        var item = {}; 
			        columns.forEach(function (column) { 
			            item[column.metadata.Ruangan] = column.NamaRuangan; 
			        }); 
			        result.push(item); 
			    }); 

			    return result;
				// executeStatement();
				// console.log('Koneksi Berhasil From Index');
				// return "Connection Success";
			}
		});
		// return res;
	}

	function create(data){
		return data;
	}

	function store(data){
		return data;
	}

	function show(data){
		return data;
	}

	function edit(data){
		return data;
	}

	function update(data){
		return data;
	}

	function destroy(data){
		return data;
	}
// End::Query Database //
// Start::CRUD //
	exports.getIndex = function(data) {
		return index(data);
	};

	exports.getCreate = function(data) {
	    return create(data);
	};

	exports.postStore = function(data) {
	    return store(data);
	};

	exports.getShow = function(data) {
	    return show(data);
	};

	exports.getEdit = function(data) {
	    return edit(data);
	};

	exports.putUpdate = function(data) {
	    return update(data);
	};

	exports.deleteDestroy = function(data) {
	    return destroy(data);
	};
// End::CRUD //