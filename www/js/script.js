$( document ).ready(function() {
    //Set Divice height as Application Height and set elemints heights relative to it
    var height = $( window ).height();    
    var AvrHeight = height/100;
    $("#InputFields" ).css( "height", "" + (AvrHeight*23) + "px" );
    $("#UserHistoryBox" ).css( "height", "" + (AvrHeight*8) + "px" );
    $("#UserHistoryBox input" ).css( "font-size", "" + (AvrHeight*6) + "px" );
    $("#UserInputBox" ).css( "height", "" + (AvrHeight*14) + "px" );
    $("#UserInputBox input" ).css( "font-size", "" + (AvrHeight*11) + "px" );
    $("#KeyBoard button" ).css( "height", "" + (AvrHeight*11) + "px" );
    //Function to Take current Input field Value and Concatanate given string to it
    function updateInput(Number) {
        var CurrentValue = $("#UsrInput").val();        
        CurrentValue = CurrentValue.toString();
        CurrentValue = CurrentValue + Number; 
        //CurrentValue = parseInt(CurrentValue);
        $("#UsrInput").val(CurrentValue); 
    }
    //Clear All
    $("#fn_Clear").click(function(){
        $("#UsrInput").val(""); 
    });
    //Delete Last input
    $("#fn_Delet").click(function(){
        var CurrentValue = $("#UsrInput").val(); 
        CurrentValue = CurrentValue.toString();
        CurrentValue = CurrentValue.slice(0,-1);
        $("#UsrInput").val(CurrentValue); 
    });
    //Number Pad Butten clicks
    $("#nu_1").click(function(){
        var Number = "1";
        updateInput(Number);
    });
    $("#nu_2").click(function(){
        var Number = "2";
        updateInput(Number);
    });
    $("#nu_3").click(function(){
        var Number = "3";
        updateInput(Number);
    });
    $("#nu_4").click(function(){
        var Number = "4";
        updateInput(Number);
    });
    $("#nu_5").click(function(){
        var Number = "5";
        updateInput(Number);
    });
    $("#nu_6").click(function(){
        var Number = "6";
        updateInput(Number);
    });
    $("#nu_7").click(function(){
        var Number = "7";
        updateInput(Number);
    });
    $("#nu_8").click(function(){
        var Number = "8";
        updateInput(Number);
    });
    $("#nu_9").click(function(){
        var Number = "9";
        updateInput(Number);
    });
    $("#nu_0").click(function(){
        var Number = "0";
        updateInput(Number);
    });
    //Decimal Point
    $("#fn_DecPo").click(function(){
        var CurrentValue = $("#UsrInput").val();        
        CurrentValue = CurrentValue.toString();
        if(CurrentValue.indexOf(".") > -1 ){
            CurrentValue = CurrentValue + "";
        }else if(CurrentValue == ""){
            CurrentValue = CurrentValue + "0.";
        }else{
            CurrentValue = CurrentValue + ".";            
        }    
        $("#UsrInput").val(CurrentValue);     
    });
/*    //Mathematical Calculations
    var FirstNumber;
    var SecondNumber;
    $("#fn_Divis").click(function(){
        var Operator = "+";
        var CurrentValue = $("#UsrInput").val();
        CurrentValue = CurrentValue.toString();        
        if(FirstNumber == undefined){
            FirstNumber = parseFloat(CurrentValue);
            CurrentValue = CurrentValue + " " + Operator;
            $("#UserHistoryBox").val(CurrentValue);
            $("#UsrInput").val("");
        }else{
            SecondNumber = parseFloat(CurrentValue);
            var Output = FirstNumber + SecondNumber;
            CurrentValue = FirstNumber + " " + Operator + " " (SecondNumber.toString());
            $("#UserHistoryBox").val(CurrentValue);
            $("#UsrInput").val(Output);
        }        
    });
    */
});



