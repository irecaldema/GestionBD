// http://api.jquery.com/jQuery.ajax/
// http://api.jquery.com/jquery.ajax/
// http://api.jquery.com/jquery.get/

var usuario="";
var contrasena="";

$(document).ready(function(){
    


    $( "#login" ).submit(function( event ) {
        
        $( "#rexultado1" ).html("...");
        console.log("submit");
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
                $( "#rexultado1" ).html("ok");
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
        alert("crear bd submit ...");

        console.log("submit");
        //Stop form from submitting normally 
        event.preventDefault();
        // Clear result div
        $("#contentDiv").html('...');


        var formData = $(this).serializeArray();
        formData.push(usuario);
        formData.push(contrasena);
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
        alert("funcion mostrar bd ...");
        
        console.log("submit");
        // Clear result div
        $("#lista_bds").html('...');


        var formData = new Array();
        formData.push(usuario);
        formData.push(contrasena);
        var gestion = {name:"gestion_bd",value:"mostrar"};
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
                alert(data.resultado+": "+data.respuesta);
                $("#lista_bds").html(data.respuesta);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("Status: " + textStatus); alert("Error: " + errorThrown);
                console.log(XMLHttpRequest.responseText);
                //$( "#contentDiv" ).html(XMLHttpRequest.responseText);
            }
        });
    }