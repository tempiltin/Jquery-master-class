$(window).on("load" , ()=>{
    $(".loading").fadeOut(2000);
})
$(document).ready(function () {

    const data = [
       {img: "/asd.jpg", id:1},
       {img: "/asd.jpg", id:2},
       {img: "/asd.jpg", id:3},
       {img: "/asd.jpg", id:4},
       {img: "/asd.jpg", id:5},
       {img: "/asd.jpg", id:6},
      
    ]
    var $button = $("button")
    var $body = $(".body-theme")
    var i = 0
    $button.on("click" , function(){
        // $body.css("background" , `url("${data.item}")`).fadeIn(2000)
        $body.css("background" , `url("/asd.jpg")`).fadeIn(9000)
    //     i = i + 1
    //    if(i === data[i] ){

    //    }
    })
});

// $(document).ready(() => $("button").on("click", () => $(".body-theme").css("background", 'url("/asd.jpg")')));