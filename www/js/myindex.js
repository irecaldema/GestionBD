
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
	
	//radio del formulario de la lista de bds
	var bd_seleccionada_radio=document.forms["form_seleccion_bd"]["bd_seleccionada"].value;
	var bd_visible = document.getElementById('seleccionado');
	bd_visible.innerHTML="Base de Datos seleccionada: <b id=bd_seleccionada2>"+bd_seleccionada_radio+"</b>";
	bd_visible.hidden=false;
}

function crear_bd(nombre_bd){
	//comando crear bd
	alert("la base de datos "+nombre_bd+" ha sido creada");
}

function seleccion_bd_on(){
	document.getElementById('tablas_b').disabled = false;
	document.getElementById('datos_b').disabled = false;
	
	//radio del formulario de la lista de bds
	var bd_seleccionada_radio=document.forms["form_seleccion_bd"]["bd_seleccionada"].value;
	var bd_visible = document.getElementById('seleccionado');
	bd_visible.innerHTML="Base de Datos seleccionada: <b id=bd_seleccionada2>"+bd_seleccionada_radio+"</b>";
	bd_visible.hidden=false;
	
	alert("base de datos seleccionada");
}

function seleccion_tabla_on(){
	var nombre_tabla_x = document.forms["form_seleccion_tabla"]["tabla_seleccionada"].value;
	if(nombre_tabla_x!=null&&nombre_tabla_x!=""){
		//radio del formulario de la lista de bds
		var tabla_seleccionada_radio=document.forms["form_seleccion_tabla"]["tabla_seleccionada"].value;
		var tabla_visible = document.getElementById('seleccionado2');
		tabla_visible.innerHTML="Tabla seleccionada: <b id=tabla_seleccionada2>"+tabla_seleccionada_radio+"</b>";
		tabla_visible.hidden=false;
	}
	alert("tabla seleccionada");
}

/*function reinicio(){
	var boton1 = document.getElementById('basedatos_b');
	boton1.disabled = true;
	var boton2 = document.getElementById('tablas_b');
	boton2.disabled = true;
	var boton3 = document.getElementById('datos_b');
	boton3.disabled = true;
	document.getElementById('desconexion').innerHTML="</br>";
	
	document.getElementById('xervidor').innerHTML="...";
	document.getElementById('uxuario').innerHTML="...";
	document.getElementById('seleccionado').hidden=true;
	document.getElementById('seleccionado2').hidden=true;
}*/

function conexion_offline(){
	//document.getElementById('desconexion').innerHTML="<button onclick='reinicio()' id='reinicio_b'>Desconexion</button>";
	
	document.getElementById('xervidor').innerHTML="<b>offline</b>";
	document.getElementById('uxuario').innerHTML="<b>local</b>";
	
	var boton = document.getElementById('basedatos_b');
	boton.disabled = false;
	
	console.log("onclick para conexion offline");
	document.getElementById("enlace_selec_bd").onclick = function(){mostrar_bds_off()};
	document.getElementById("seleccionar_bd").onclick = function(){seleccion_bd_off()};
	
	document.getElementById("enlace_selec_tabla").onclick = function(){mostrar_tablas_off()};
	document.getElementById("seleccionar_tabla").onclick = function(){seleccion_tabla_off()};
}

function conexion_online(){
	console.log("onclick para conexion online");
	if (document.getElementById('rexultado1').innerHTML=="online"){
		var boton = document.getElementById('basedatos_b');
		boton.disabled = false;
		//var boton_onclick = document.getElementById("enlace_selec_bd"); 		modo 2 de hacer lo mismo
		//boton_onclick.setAttribute("onClick",function(){mostrar_bds_on()});
		
		document.getElementById("enlace_selec_bd").onclick = function(){mostrar_bds_on()};
		document.getElementById("seleccionar_bd").onclick = function(){seleccion_bd_on()};
		
		document.getElementById("enlace_selec_tabla").onclick = function(){mostrar_tablas_on()};
		document.getElementById("seleccionar_tabla").onclick = function(){seleccion_tabla_on()};
		
		document.getElementById("enlace_selec_dato").onclick = function(){mostrar_datos_on()};
		document.getElementById("crear_datos").onclick = function(){crear_datos_on()};
		//document.getElementById("borrar_dato").onclick = function(){borrar_dato_on()};
		
		//document.getElementById('desconexion').innerHTML="<button onclick='reinicio()' id='reinicio_b'>Desconexion</button>";
	}
}