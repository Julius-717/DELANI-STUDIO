//For toggling on WHAT WE DO
$(document).ready(function() {
    $(".onClick1").click(function() {
        $("#kash1").toggle();
        $("#click1").toggle();
    });
    $(".onClick2").click(function() {
        $("#kash2").toggle();
        $("#click2").toggle();
    });
    $(".onClick3").click(function() {
        $("#kash3").toggle();
        $("#click3").toggle();
    });


// For hover effect on PORTFOLIO

    $("#work1").mouseover(function()  {
        $("pWork1").show();
    });
    $("#work1").mouseleave(function()  {
        $("#pWork1").hide();
    });

    $('#work2').mouseover(function() {
        $('#pWork2').show();
    });
    $('#work2').mouseleave(function() {
        $('#pWork2').hide();
    });

    $('#work3').mouseover(function() {
        $('#pWork3').show();
    });
    $('#work3').mouseleave(function() {
        $('#pWork3').hide();
    });

    $('#work4').mouseover(function() {
        $('#pWork4').show();
    });
    $('#work4').mouseleave(function() {
        $('#pWork4').hide();
    });

    $('#work5').mouseover(function() {
        $('#pWork5').show();
    });
    $('#work5').mouseleave(function() {
        $('#pWork5').hide();
    });

    $('#work6').mouseover(function() {
        $('#pWork6').show();
    });
    $('#work6').mouseleave(function() {
        $('#pWork6').hide();
    });

    $('#work7').mouseover(function() {
        $('#pWork7').show();
    });
    $('#work7').mouseleave(function() {
        $('#pWork7').hide();
    });

    $('#work8').mouseover(function() {
        $('#pWork8').show();
    });
    $('#work8').mouseleave(function() {
        $('#pWork8').hide();
    });


var btn = document.getElementById("submit");

// When the user clicks on the button, open the modal 
btn.onclick = function(event) {
    // Validate form for entry
    var x = document.forms["myForm"]["contact-name"].value;
    if (x == "") {
        alert("Name not entered");
        return false;
    }
    var y = document.forms["myForm"]["contact-email"].value;
    if (y == "") {
        alert("Email not entered");
        return false;
    }
    var z = document.forms["myForm"]["contact-message"].value;
    if (z == "") {
        alert("You have no message to send");
        return false;
    }
    var person1Input = $("input#contact-name").val();
    $("span#outputName").append(person1Input);

    $('.toast').toast('show');
    event.preventDefault();
}
// MDB Lightbox Init
$(function  ()  {
    $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});

    $("form").submit(function(event)  {  
        var name= $("input#name").val();
    });

function contact(val){
    alert("Hello " + name + " We have received your message.Thank you for reaching out to us.");
};
});