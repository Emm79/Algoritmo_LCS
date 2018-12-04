/* global LCS */

$(document).ready(function(){

    $("#formRegistroU").validetta({
        bubblePosition: "bottom",
        bubbleGapTop: 5,
        bubbleGapLeft: 5,
        onError:function(e){
            e.preventDefault();
            alert("Las cadenas deben tener de 1 a 9 caracteres");
            $("#btn_Sig").attr("disabled", true);
            $("#formRegistroU").trigger("reset");
            
        },
    });
});	
