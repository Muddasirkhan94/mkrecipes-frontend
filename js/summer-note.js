"use strict";

$(document).ready(function () {
    $("#your_summernote").summernote({
        placeholder: 'Type your Description',
        height: 150,
        toolbar: [
            // [groupName, [list of button]]
            ['style', ['style','fontname','bold', 'italic', 'underline', 'clear']],
            ['font', ['strikethrough', 'superscript', 'subscript']],
            ['fontsize', ['fontsize']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['height', ['height']]
        ]
    });
});

$('.dropdown-toggle').dropdown();
