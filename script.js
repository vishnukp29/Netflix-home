$(document).ready(function(){
    $("#mail").validate({
        rules:{
                emailAddress:{
                    required:true,
                    email:true
                }
        }
    })
})
