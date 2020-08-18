
// Check off Specific Todos by Clicking

$("ul").on('click','li',function(){
    $(this).toggleClass("completed")
});

$("ul").on("click",'span',function(event){
    console.log("X");
    $(this).parent().fadeOut(1000,function(){
        $(this).remove();
    });
    event.stopPropagation();
    
})


$("input[type='text']").on("keypress",function(event){
    ///codes   
    if(event.which===13){
        var txt = $(this).val();
        $(this).val("");
        //console.log(txt);
        //Creating new LI and adding to ul
        $("ul").append(`<li><span><i class="fa fa-trash" aria-hidden="true"></i></span> ${txt}</li>`);

    }  
}); 


$(".fa-plus").on('click',function(){
    $("input[type='text']").fadeToggle();
})