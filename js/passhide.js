
    $(document).ready(function () {
        $('#enable-show').click(function () {
            var type = $('#password').attr('type') == "text" ? "password" : 'text',
                c = $(this).text() == "Hide password" ? "Show password" : "Hide password";
            $(this).text(c);
            $('#password').prop('type', type);
        });
    });
