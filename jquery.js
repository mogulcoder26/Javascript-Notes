// $("h1").addClass("okay")
// $("button").text("Don't Click me");


// for(var i=0;i<=9;i++){
// console.log($("img").attr("src"));
// }

// $("a").attr("href","https://www.yahoo.com")

// $(document).keypress(function(event){
//     $("h1").text(event.key);
// })

// $(document).on("mouseover",function(event){
    
//    setTimeout() 
//     $("h1")

// })

// $('h1').on("click",function(){
//     $('h1').hide();
// })

// //similarly show.
// $('h1').show();



// $('h1').on("click",function(){
//     $('h1').fadeOut();
// })



// $('button').on("click",function(){
//     $("h1").slideToggle();
// })

// $('button').on("click",function(){
//     $("h1").animate({opacity:0.5});
// })

$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5});
})
