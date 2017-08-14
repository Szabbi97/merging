$(document).ready(function () {
    $("#loginBtn").on("click", function () {
        var postData = JSON.stringify({
            "userName": $("#userName").val(),
            "Password": $("#userPassword").val(),
            "provider": "credentials",
            "State": "null",
            "oauth_token": "null",
            "oauth_verifier": "null",
            "RememberMe": false,
        });
        $.ajax({
            type: "POST",
            url: "http://demo.andoc.net:20080/json/reply/Authenticate",
            data: postData,
            headers: {
                "X-Custom-APIKey": "teszt",
                "Access-Control-Allow-Origin":"*"
            },
            contentType: "application/json; charset=utf-8",
            success: callbackfunction,
            error: function (msg) { console.log(msg); },
            dataType : "json"
        });
    });
    function callbackfunction(result) {
        if (result.d) {
            alert('success');
        }
    }
});