$(document).ready(function() {
    $.ajax({
        url: "http://names.sinistercode.com:4242/api/names?regex=^je.*a$&sort=freq-desc&page-size=10&page=1&gender=female&format=json"
        //url: "http://names.sinistercode.com:4242/api/names?regex=^mi.*a$&format=json"
    }).then(function(data) {
        var list= '';
        for(var i= 0; i < data.results.length; i++) {
            list+= '<li>' + data.results[i]["name"] + '</li>';
        }
        //$("#search").click(function())
        $("#names").html(list);
    });
});

