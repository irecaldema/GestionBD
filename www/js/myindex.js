function seleccion_bd(){
	alert("conexion realizada")
	/*var lista_bd = document.getElementById('seleccion_bd');
	var db;
	db = new PGSQLitePlugin("test_native.sqlite3");
	alert("conexion realizada")
	var basesdatos;
	basesdatos=db.executeSql('.databases');
	for(var i=0; basesdatos.size()<i; i++){
		//por cada base de datos se añade un li a la ul
	}*/
	
	var boton = document.getElementById('selec_bd_b');
	boton.disabled = false;
	//boton.removeAttr("disabled");
}

function reinicio(){
	var boton1 = document.getElementById('selec_bd_b');
	boton1.disabled = true;
	var boton2 = document.getElementById('tablas_b');
	boton2.disabled = true;
	var boton3 = document.getElementById('datos_b');
	boton3.disabled = true;
	document.getElementById('desconexion').innerHTML="</br>";
}

function conexion_offline(){
	document.getElementById('desconexion').innerHTML="<button onclick='reinicio()' id='reinicio_b'>Desconexion</button>";
}

function conexion_online(){
	document.getElementById('desconexion').innerHTML="<button onclick='reinicio()' id='reinicio_b'>Desconexion</button>";
}
