$( document ).ready(function() {
    //Set Divice height as Application Height and set elemints heights relative to it
    var height = $( window ).height();    
    var AvrHeight = height/100;
    $("#AppBox" ).css( "height", "" + height + "px" );
    $("#UserInputBox" ).css( "height", "" + (AvrHeight*10) + "px" );
    $("#UserInputBox input" ).css( "font-size", "" + (AvrHeight*6) + "px" );
    $("#AppBox button" ).css( "height", "" + (AvrHeight*13) + "px" );
});


