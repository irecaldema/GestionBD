// http://api.jquery.com/jQuery.ajax/
// http://api.jquery.com/jquery.ajax/
// http://api.jquery.com/jquery.get/


$(document).ready(function(){

    $( "#login" ).submit(function( event ) {
    	alert("conectando...");

        console.log("submit");
        /* Stop form from submitting normally */
        event.preventDefault();
        /* Clear result div*/
        $("#contentDiv").html('...');


        var formData = $(this).serializeArray();

        $.ajax({
           //type: "GET",
           type: "POST",
           url: "login.php",
           dataType: "json",
           //dataType: "html",
           data: formData,

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
    
    $( "#crearBD" ).submit(function( event ) {
    	alert("conectando...");

        console.log("submit");
        /* Stop form from submitting normally */
        event.preventDefault();
        /* Clear result div*/
        $("#contentDiv").html('...');


        var formData = $(this).serializeArray();

        $.ajax({
           //type: "GET",
           type: "POST",
           url: "gestorBD.php",
           dataType: "json",
           //dataType: "html",
           data: formData,

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