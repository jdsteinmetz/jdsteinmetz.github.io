$(document).ready(function (){
    $('#vine-button').click(function() {
        $("#vine").toggleClass("visible");
        $("#bridge").removeClass("visible");
        $("#millrace").removeClass("visible");
        $("#orchard").removeClass("visible");
        $("#fidler").removeClass("visible");
        });
});

$(document).ready(function (){
    $('#bridge-button').click(function() {
        $("#bridge").toggleClass("visible");
        $("#vine").removeClass("visible");
        $("#millrace").removeClass("visible");
        $("#orchard").removeClass("visible");
        $("#fidler").removeClass("visible");
        });
});

$(document).ready(function (){
    $('#millrace-button').click(function() {
        $("#millrace").toggleClass("visible");
        $("#bridge").removeClass("visible");
        $("#vine").removeClass("visible");
        $("#orchard").removeClass("visible");
        $("#fidler").removeClass("visible");
        });
});

$(document).ready(function (){
    $('#orchard-button').click(function() {
        $("#orchard").toggleClass("visible");
        $("#bridge").removeClass("visible");
        $("#millrace").removeClass("visible");
        $("#vine").removeClass("visible");
        $("#fidler").removeClass("visible");
        });
});

$(document).ready(function (){
    $('#fidler-button').click(function() {
        $("#fidler").toggleClass("visible");
        $("#bridge").removeClass("visible");
        $("#millrace").removeClass("visible");
        $("#orchard").removeClass("visible");
        $("#vine").removeClass("visible");
        });
});
