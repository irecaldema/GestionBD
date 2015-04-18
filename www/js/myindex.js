
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

function crear_bd(nombre_bd){
	//comando crear bd
	alert("la base de datos "+nombre_bd+" ha sido creada");
}

function seleccion_bd_on(bd_seleccionada){
	document.getElementById('tablas_b').disabled = false;
	document.getElementById('datos_b').disabled = false;
		//radio del formulario de la lista de bds
	var bd_seleccionada_combo=document.forms["form_seleccion_bd_on"]["bd_seleccionada"].value;
	document.getElementById('seleccionado').innerHTML="Base de Datos seleccionada: <b id=bd_seleccionada2>"+bd_seleccionada_combo+"</b>";
	alert("base de datos seleccionada");
		//error vuelta a index tras alert
}

function reinicio(){
	var boton1 = document.getElementById('basedatos_b');
	boton1.disabled = true;
	var boton2 = document.getElementById('tablas_b');
	boton2.disabled = true;
	var boton3 = document.getElementById('datos_b');
	boton3.disabled = true;
	document.getElementById('desconexion').innerHTML="</br>";
	
	document.getElementById('xervidor').innerHTML="...";
	document.getElementById('uxuario').innerHTML="...";
	
}

function conexion_offline(){
	document.getElementById('desconexion').innerHTML="<button onclick='reinicio()' id='reinicio_b'>Desconexion</button>";
	
	document.getElementById('xervidor').innerHTML="<b>offline</b>";
	document.getElementById('uxuario').innerHTML="<b>local</b>";
	
	var boton = document.getElementById('basedatos_b');
	boton.disabled = false;
	
	document.getElementById("enlace_selec_bd").onclick = function() {mostrar_bds_off()};
}

function conexion_online(){
	if (document.getElementById('rexultado1').innerHTML=="online"){
		
		document.getElementById("enlace_selec_bd").onclick = function(){mostrar_bds_on()};
		//var boton_onclick = document.getElementById("enlace_selec_bd"); 		modo 2 de hacer lo mismo
		//boton_onclick.setAttribute("onClick",function(){mostrar_bds_on()});
		console.log("onclick xD");
		
		document.getElementById('desconexion').innerHTML="<button onclick='reinicio()' id='reinicio_b'>Desconexion</button>";
		var boton = document.getElementById('basedatos_b');
		boton.disabled = false;

	}
}