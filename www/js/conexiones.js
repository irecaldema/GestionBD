// http://api.jquery.com/jquery.ajax/
// http://api.jquery.com/jquery.get/

var usuario="";
var contrasena="";

$(document).ready(function(){

    $( "#login" ).submit(function( event ) {
        $( "#rexultado1" ).html("...");
        console.log("login submit conexiones");
        /* Stop form from submitting normally */
        event.preventDefault();
        /* Clear result div*/
        $("#uxuario").html('...');

        var formData = $(this).serializeArray();
        usuario=formData[0];
        contrasena=formData[1];

        $.ajax({
            //type: "GET",
            type: "POST",
            url: "https://base-de-datos-pruebas-zubiri.c9.io/login.php",
            dataType: "json",
            data: formData,
            //dataType: "html",

            success: function(data){
                //console.log(data);
                $( "#uxuario" ).html(data.usuario);
                $( "#xervidor" ).html(data.servidor);
                $( "#rexultado1" ).html("online");
                alert("conexion exitosa: "+data.usuario);
                //location.href = "index.html";
              
           },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                //alert("analisis de error 1 Status: " + textStatus+ " --Error: " + errorThrown);
                console.log(XMLHttpRequest.responseText);
                //$( "#contentDiv" ).html(XMLHttpRequest.responseText);
                //alert("analisis de error 2 error: "+XMLHttpRequest.responseText+" --mas info-- "+ XMLHttpRequest.responseText);
            }
        
        });
    });
    
    $( "#form_crearBD" ).submit(function( event ) {
        console.log("crear bd submit conexiones");
        //Stop form from submitting normally 
        event.preventDefault();
        var formData = $(this).serializeArray();
        formData.push(usuario);
        formData.push(contrasena);
        var gestion = {name:"gestion_bd",value:"crear"};
        formData.push(gestion);
        $.ajax({
            type: "POST",
            url: "https://base-de-datos-pruebas-zubiri.c9.io/gestorBD.php",
            dataType: "json",
            data: formData,
            success: function(data){
                console.log(data);
                alert(data.resultado+": "+data.nombre_bd)
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                //alert("Status: " + textStatus); alert("Error: " + errorThrown);
                console.log(XMLHttpRequest.responseText);
            }
        });
    });

    $( "#form_crearTabla" ).submit(function( event ) {
        console.log("crear tabla submit conexiones");
        //Stop form from submitting normally 
        event.preventDefault();
        var formData = $(this).serializeArray();
        
        formData.push(usuario);
        formData.push(contrasena);
        var bd_seleccionada = $("#bd_seleccionada2").html();
        var n_bd = {name:"n_bd",value:bd_seleccionada}
        formData.push(n_bd);
        var gestion = {name:"gestion_tabla",value:"crear"};
        formData.push(gestion);
        
        $.ajax({
            type: "POST",
            url: "https://base-de-datos-pruebas-zubiri.c9.io/gestorTablas.php",
            dataType: "json",
            data: formData,
            success: function(data){
                console.log(data);
                alert(data.resultado+": "+data.nombre_tabla)
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                //alert("Status: " + textStatus); alert("Error: " + errorThrown);
                console.log("error en la creacion de la tabla: "+errorThrown);
                console.log(XMLHttpRequest.responseText);
                //$( "#contentDiv" ).html(XMLHttpRequest.responseText);
            }
        });
    });
    
    $( "#form_crearDato" ).submit(function( event ) {
        console.log("insercion del dato conexiones");
        //Stop form from submitting normally 
        event.preventDefault();
        var formData = $(this).serializeArray();
        
        formData.push(usuario);
        formData.push(contrasena);
        var bd_seleccionada = $("#bd_seleccionada2").html();
        var n_bd = {name:"n_bd",value:bd_seleccionada}
        formData.push(n_bd);
        var gestion = {name:"gestion_tabla",value:"crear"};
        formData.push(gestion);
        
        $.ajax({
            type: "POST",
            url: "https://base-de-datos-pruebas-zubiri.c9.io/gestorTablas.php",
            dataType: "json",
            data: formData,
            success: function(data){
                console.log(data);
                alert(data.resultado+": "+data.nombre_tabla)
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                //alert("Status: " + textStatus); alert("Error: " + errorThrown);
                console.log("error en la insercion del dato: "+errorThrown);
                console.log(XMLHttpRequest.responseText);
                //$( "#contentDiv" ).html(XMLHttpRequest.responseText);
            }
        });
    });

});   

function mostrar_bds_on(){
    console.log("mostrar bds funcion conexiones");
    $("#lista_bds").html('...');
    
    var formData = new Array();
    formData.push(usuario);
    formData.push(contrasena);
    var gestion = {name:"gestion_bd",value:"mostrar"};
    formData.push(gestion)
    $.ajax({
        type: "POST",
        url: "https://base-de-datos-pruebas-zubiri.c9.io/gestorBD.php",
        dataType: "json",
        data: formData,

        success: function(data){
            console.log(data);
            var bds_zzz = data.respuesta;
            var lista_zzz = document.getElementById('lista_bds').innerHTML;
            for (var i=0;i<bds_zzz.length;i++) {
                 //añadir li a ul ok
                 if (i==0){
                    lista_zzz ="<input type='Radio' name='bd_seleccionada' value=\'"+bds_zzz[i]+"\'>"+bds_zzz[i]; 
                    lista_zzz+="<br/>";
                 }else{
                    lista_zzz +="<input type='Radio' name='bd_seleccionada' value=\'"+bds_zzz[i]+"\'>"+bds_zzz[i];
                    lista_zzz+="<br/>";
                 }
            }
            $("#lista_bds").html(lista_zzz);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus); alert("Error: " + errorThrown);
            console.log(XMLHttpRequest.responseText);
        }
    });
}
    
function mostrar_tablas_on(){
    console.log("mostrar tablas funcion conexiones");
    $("#lista_tablas").html('...');
    
    var formData = new Array();
    formData.push(usuario);
    formData.push(contrasena);
    var bd_seleccionada = $("#bd_seleccionada2").html();
    var n_bd = {name:"n_bd",value:bd_seleccionada};
    formData.push(n_bd);
    var gestion = {name:"gestion_tabla",value:"mostrar"};
    formData.push(gestion);
    
    $.ajax({
        type: "POST",
        url: "https://base-de-datos-pruebas-zubiri.c9.io/gestorTablas.php",
        dataType: "json",
        data: formData,

        success: function(data){
            console.log(data);
            var tablas_zzz = data.respuesta;
            var lista_zzz = document.getElementById('lista_tablas').innerHTML;
            for (var i=0;i<tablas_zzz.length;i++) {
                 //añadir li a ul ok
                 if (i==0){
                    lista_zzz ="<input type='Radio' name='tabla_seleccionada' value=\'"+tablas_zzz[i]+"\'>"+tablas_zzz[i]; 
                    lista_zzz+="<br/>";
                 }else{
                    lista_zzz +="<input type='Radio' name='tabla_seleccionada' value=\'"+tablas_zzz[i]+"\'>"+tablas_zzz[i];
                    lista_zzz+="<br/>";
                 }
            }
            $("#lista_tablas").html(lista_zzz);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus); alert("Error: " + errorThrown);
            console.log(XMLHttpRequest.responseText);
            //$( "#contentDiv" ).html(XMLHttpRequest.responseText);
        }
    });
}

//configuracion de mostrar datos
// lista datos 
function mostrar_datos_on(){
    console.log("mostrar datos funcion conexiones");
    $("#lista_datos").html('...');
    
    var formData = new Array();
    
    formData.push(usuario); //datos del usuario
    formData.push(contrasena);
    
    var bd_seleccionada = $("#bd_seleccionada2").html(); //nombre bd
    var n_bd = {name:"n_bd",value:bd_seleccionada};
    formData.push(n_bd);
    
    var tabla_seleccionada = $("#tabla_seleccionada2").html(); //nombre tabla
    var n_tabla = {name:"n_tabla",value:tabla_seleccionada};
    formData.push(n_tabla);
    
    var gestion = {name:"gestion_dato",value:"mostrar"};   //tipo de gestion
    formData.push(gestion);
    
    $.ajax({
        type: "POST",
        url: "https://base-de-datos-pruebas-zubiri.c9.io/gestorDatos.php",
        dataType: "json",
        data: formData,

        success: function(data){
            console.log(data);
            // array de vuelta del 
            //php $data = array('columnas' => $nombres_columnas, 'datos' => $datos, 'resultado' => 'ok');
            var columnas_zzz = data.columnas;
            //["ID_Contact", "Name", "Email", "Phone"]
            var datos_zzz = data.datos;
            var lista_zzz = document.getElementById('lista_datos').innerHTML; // tabla 6x4
            var n_dato=0;
            for (var i=0;i<(datos_zzz.length/columnas_zzz.length);i++) { //24/4=6  6 vueltas 6 filas
                 if (i==0){ //primera fila nombres de las columnas
                    lista_zzz ="<table border=1><tr><td/>";
                    for(var n=0;n<columnas_zzz.length;n++) { //4 vueltas 4 celdas
                        lista_zzz +="<td>"+columnas_zzz[n]+"</td>";
                    }
                    //"<input type='Radio' name='tabla_seleccionada' value=\'"+tablas_zzz[i]+"\'>"+tablas_zzz[i]; 
                    lista_zzz+="</tr>";
                 }else{
                    lista_zzz+="<tr>";//boton sin terminar
                    //lista_zzz+="<td><input type='Radio' name='tabla_seleccionada' value=\'"+datos_zzz[n_dato]+"\'>"+i+"</td>"; //correciones pendientes
                    for(var m=0;m<columnas_zzz.length;m++)// 4 vueltas 4 celdas
                    {
                        lista_zzz +="<td>"+datos_zzz[n_dato]+"</td>";
                        n_dato++;
                        //"<input type='Radio' name='tabla_seleccionada' value=\'"+tablas_zzz[i]+"\'>"+tablas_zzz[i];
                    }
                    lista_zzz+="</tr>";
                 }
            }
            lista_zzz+="</table>";
            lista_zzz+="</br>";
            $("#lista_datos").html(lista_zzz);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus); alert("Error: " + errorThrown);
            console.log(XMLHttpRequest.responseText);
            //$( "#contentDiv" ).html(XMLHttpRequest.responseText);
        }
    });
}