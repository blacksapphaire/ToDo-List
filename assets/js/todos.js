$('ul').on("click", "li", function(){
    $(this).toggleClass("completed");
})

$('ul').on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })
    event.stopPropagation();
})

$("input[type='text']").on("keypress",function(event){
    if(event.which === 13)
    {
        var todoText= $(this).val();
        $(this).val("");
        $('ul').append("<li><span id='btn'><i class='fas fa-trash'></i></span> " + todoText + "</li>");
    }
})
$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle(100);
});