
$(document).ready(function () {

    //enables a class to be draggable, droppable, resizable and droppable
    $("#draggable").draggable();
    $("#droppable").droppable({
        drop: function (event, ui) {
            $(this).addClass("ui-state-highlight").find("p").html("item dropped")
        }
    });
    $("#resizable").resizable();
    $("#selectable").selectable();


    //widget code


    $(function () {
        $("#accordion").accordion();
    });


    var tags = [
        "dog", "cat", "fish", "bird", "snake", "lizard"]
    $("#autocomplete").autocomplete({
        source: tags
    });



    $("#datepicker").datepicker();

    $(function () {
        $("#slider").slider({
            slide: function (event, ui) {
                $("#amount").text(ui.value);
            }
        });
    });


    //enables effects
    $('#hide').click(function () {
        $('#target').toggle("hide");
    });

    $('#show').click(function () {
        $('#target').toggle("show");
    });

    $('#explode').click(function () {
        $('#target').effect('explode'); // Applies explode effect to the target element
    });


    var colors = ["red", "green", "blue", "orange", "purple"];

    // Initialize color index
    var currentIndex = 0;

    // Function to rotate colors
    function rotateColors() {
        // Apply the current color to the target element
        $('#target').animate({ 'background-color': colors[currentIndex] });

        // Increment the color index
        currentIndex = (currentIndex + 1) % colors.length;
    }

    // Call the rotateColors function when the button is clicked
    $('#changeColour').click(rotateColors);


    $('#fadeIn').click(function () {
        $('#target').fadeIn(); // Fades in the target element
    });


    $('#fadeOut').click(function () {
        $('#target').fadeOut(); // Fades out the target element
    });

});





