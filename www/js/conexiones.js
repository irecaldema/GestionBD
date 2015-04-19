// http://api.jquery.com/jQuery.ajax/
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
        //alert("crear bd submit ...");

        console.log("crear bd submit conexiones");
        //Stop form from submitting normally 
        event.preventDefault();
        // Clear result div
        $("#contentDiv").html('...');


        var formData = $(this).serializeArray();
        formData.push(usuario);
        formData.push(contrasena);
        var gestion = {name:"gestion_bd",value:"crear"};
        formData.push(gestion)
        $.ajax({
            //type: "GET",
            type: "POST",
            url: "https://base-de-datos-pruebas-zubiri.c9.io/gestorBD.php",
            dataType: "json",
            data: formData,
            //dataType: "html",

            success: function(data){
                console.log(data);
                alert(data.resultado+": "+data.nombre_bd)

            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                //alert("Status: " + textStatus); alert("Error: " + errorThrown);
                console.log(XMLHttpRequest.responseText);
                //$( "#contentDiv" ).html(XMLHttpRequest.responseText);
            }

        });

    });

});   

function mostrar_bds_on(){
    console.log("mostrar bds funcion conexiones");
    //alert("funcion mostrar bd ...");
    // Clear result div
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
            //$( "#contentDiv" ).html(XMLHttpRequest.responseText);
        }
    });
}
    
function mostrar_tablas_on(){
    console.log("mostrar tablas funcion conexiones");
    //alert("funcion mostrar bd ...");
    // Clear result div
    $("#lista_tablas").html('...');
    
    var formData = new Array();
    formData.push(usuario);
    formData.push(contrasena);
    var bd_seleccionada = $("#bd_seleccionada2").html();
    var bd_n = {name:"bd_n",value:bd_seleccionada}
    formData.push(bd_n);
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