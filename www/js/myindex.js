function mostrar_bds_off(){
	/*var lista_bd = document.getElementById('seleccion_bd');
	var db;
	db = new PGSQLitePlugin("test_native.sqlite3");
	alert("conexion realizada")
	var basesdatos;
	basesdatos=db.executeSql('.databases');
	for(var i=0; basesdatos.size()<i; i++){
		//por cada base de datos se añade un li a la ul
	}*/
	
	var boton = document.getElementById('basedatos_b');
	boton.disabled = false; //otra manera --> boton.removeAttr("disabled");
	alert("conexion realizada");
}

function seleccion_bd_off(){
	/*var lista_bd = document.getElementById('seleccion_bd');
	var db;
	db = new PGSQLitePlugin("test_native.sqlite3");
	alert("conexion realizada")
	var basesdatos;
	basesdatos=db.executeSql('.databases');
	for(var i=0; basesdatos.size()<i; i++){
		//por cada base de datos se añade un li a la ul
	}*/
	
	document.getElementById('tablas_b').disabled = false;
	document.getElementById('datos_b').disabled = false;
	document.getElementById('seleccionado').innerHTML="<button disabled data-rel=\"dialog\" class=\"ui-corner-all\" data-theme=\"b\" data-transition=\"flip\" id=\"selec_bd_b\" >Base de Datos seleccionada: </button><!--cuando se selecciona nombre de BD-->";
	alert("base de datos seleccionado");
}

function mostrar_bds_on(){
	/*var lista_bd = document.getElementById('seleccion_bd');
	var basesdatos=show databases;
	basesdatos=db.executeSql('.databases');
	lista_bd.innerHTML=
	<ul>
		for(var i=0; basesdatos.size()<i; i++){
			//por cada base de datos se añade un li a la ul
			<li></li>
		}
	</ul>
	*/
	var boton = document.getElementById('basedatos_b');
	boton.disabled = false;
	alert("base de datos seleccionado");
}

function crear_bd(nombre_bd){
	//comando crear bd
	alert("la base de datos "+nombre_bd+" ha sido creada");
}

function seleccion_bd_on(){
	/*var lista_bd = document.getElementById('seleccion_bd');
	var basesdatos=show databases;
	basesdatos=db.executeSql('.databases');
	lista_bd.innerHTML=
	<ul>
		for(var i=0; basesdatos.size()<i; i++){
			//por cada base de datos se añade un li a la ul
			<li></li>
		}
	</ul>
	*/
	document.getElementById('tablas_b').disabled = false;
	document.getElementById('datos_b').disabled = false;
	document.getElementById('seleccionado').innerHTML="<button disabled data-rel=\"dialog\" class=\"ui-corner-all\" data-theme=\"b\" data-transition=\"flip\" id=\"selec_bd_b\" >Base de Datos seleccionada: </button><!--cuando se selecciona nombre de BD-->";
	alert("conexion realizada");
}

function reinicio(){
	var boton1 = document.getElementById('basedatos_b');
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