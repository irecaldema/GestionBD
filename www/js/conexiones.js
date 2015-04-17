// http://api.jquery.com/jQuery.ajax/
// http://api.jquery.com/jquery.ajax/
// http://api.jquery.com/jquery.get/


$(document).ready(function(){

    $( "#login" ).submit(function( event ) {

        console.log("submit");
        /* Stop form from submitting normally */
        event.preventDefault();
        /* Clear result div*/
        $("#uxuario").html('usuario: ');

        var formData = $(this).serializeArray();

        $.ajax({
           //type: "GET",
           type: "POST",
           url: "https://base-de-datos-pruebas-zubiri.c9.io/login.php",
           dataType: "json",
           data: formData,
           //dataType: "html",

           success: function(data){
              //console.log(data);
              $( "#uxuario" ).html("usuario: "+data.usuario);
              $( "#xervidor" ).html("servidor: "+data.servidor);
              alert("conexion exitosa: "+data.usuario);
           },
           error: function(XMLHttpRequest, textStatus, errorThrown) {
              //alert("analisis de error 1 Status: " + textStatus+ " --Error: " + errorThrown);
              console.log(XMLHttpRequest.responseText);
              //$( "#contentDiv" ).html(XMLHttpRequest.responseText);
              //alert("analisis de error 2 error: "+XMLHttpRequest.responseText+" --mas info-- "+ XMLHttpRequest.responseText);
           }
        
        });
    });
    
    $( "#crearBD" ).submit(function( event ) {
    	//alert("conectando... 2");

        console.log("submit");
        //Stop form from submitting normally 
        event.preventDefault();
        // Clear result div
        $("#contentDiv").html('...');


        var formData = $(this).serializeArray();

        $.ajax({
           //type: "GET",
           type: "POST",
           url: "https://base-de-datos-pruebas-zubiri.c9.io/CrearBD.php",
           dataType: "json",
           data: formData,
           //dataType: "html",

           success: function(data){
              console.log(data);
              $( "#contentDiv" ).html(data);

           },
           error: function(XMLHttpRequest, textStatus, errorThrown) {
              //alert("Status: " + textStatus); alert("Error: " + errorThrown);
              console.log(XMLHttpRequest.responseText);
              $( "#contentDiv" ).html(XMLHttpRequest.responseText);
           }

        });

    });

});