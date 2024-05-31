
$(document).ready(function() {
    function storeText(event){
        event.preventDefault();

        var inputElement = $("#textInput");
        var inputValue = inputElement.val();
        var storedText = inputValue;

        $("#taskList").append('<li><button class="todo">' + storedText + '</button></li>'); 
       
        inputElement.val('');

    }
    $("#myForm").on("submit",storeText);


$(".todo").click(function(){
    $(this).toggleClass("active");
    $(this).next(".panel").slideToggle("fast");
});

});


