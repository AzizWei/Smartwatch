$(document).ready(function() {
    $("#loginBtn").click(function(e){
        $("form.login").css("display","flex")
    })
    $(".signin").click(function(e){
        $("form.login").css("display","flex")
    })
    $("#closeBtn").click(function(e){
        $("form.login").css("display","none")
    })
})