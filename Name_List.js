/**var $ = jQuery;
jQuery(document).ready(function($) {
    var genderhash= [];
    var getNames = function() {
        var starts_with= $("#starts-with").val();
        var ends_with= $("#ends-with").val();
        var sort= $("#sort").val();
        var contains_letters= $("#contains-letters").val();
        var contains_string= $("#contains-string").val();
        var page= $("#page").val();
        var page_size= $("#page_size").val();
        //var format= $("#format").val();
        var min_length= $("#min_length").val();
        var max_length= $("#max_length").val();
        var keys= Object.keys(genderhash);
        var gender_array= [];
        for (a= 0; a < keys.length; a++) {
            key= keys[a];
            if(genderhash[key] == 1) {
                gender_array.push(key);
            }
        }
        var gender= gender_array.join();

        var url= "http://names.sinistercode.com:4242/api/names?format=json"
            + (starts_with ? "&starts-with=" + starts_with : "")
            + (ends_with ? "&ends-with=" + ends_with : "")
            + (sort ? "&sort=" + sort : "")
            + (contains_letters ? "&contains-letters=" + contains_letters : "")
            + (contains_string ? "&contains-string=" + contains_string : "")
            + (gender ? "&gender=" + gender : "")
            + (page ? "&page=" + page : "")
            + (page_size ? "&page-size=" + page_size : "")
            + (min_length ? "&min-length=" + min_length : "")
            + (max_length ? "&max-length=" + max_length : "");
        
        $.ajax({
            url: url
        }).then(function(data) {
            var list= '';
            for(var i= 0; i < data.results.length; i++) {
                list+= '<li onclick="getSimilarNames()" style="float: left; min-width:200px;">' + data.results[i]["name"] + '</li>';
            }
            $("#names").html(list);

        });  
    };
    $("#search").click(getNames);
    $("#names").click(getSimilarNames);
    $("#sort").change(getNames);
    $("#gender :checkbox").change(function () {
        if(this.checked) {
            genderhash[this.name]= 1;
        }
        else {
            genderhash[this.name]= 0;
        }
    });
});

function getSimilarNames() {
    var starts_with= $("#starts-with").val();
    var ends_with= $("#ends-with").val();
    var sort= $("#sort").val();
    var contains_letters= $("#contains-letters").val();
    var contains_string= $("#contains-string").val();
    var url = "http://names.sinistercode.com:4242/api/names?format=json&sort=length&contains-letters=" + this.innerHTML;
    
    $.ajax({
            url: url
        }).then(function(data) {
            var list= '';
            for(var i= 0; i < data.results.length; i++) {
                list+= '<li style="float: left; min-width:200px;">' + data.results[i]["name"] + '</li>';
            }
            $("#names").html(list);

        });  
};*/


var $ = jQuery;
$.extend({
    getUrlVars: function() {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++)
        {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    },
    getUrlVar: function(name) {
        return $.getUrlVars()[name];
    }
});

jQuery(document).ready(function($) {
    var genderhash= [];
    var getNames = function() {
        var starts_with= $("#starts-with").val();
        var ends_with= $("#ends-with").val();
        var sort= $("#sort").val();
        var contains_letters= $("#contains-letters").val();
        var contains_string= $("#contains-string").val();
        var page= $("#page").val();
        var page_size= $("#page_size").val();
        //var format= $("#format").val();
        var min_length= $("#min_length").val();
        var max_length= $("#max_length").val();
        var keys= Object.keys(genderhash);
        var gender_array= [];
        for (a= 0; a < keys.length; a++) {
            key= keys[a];
            if(genderhash[key] == 1) {
                gender_array.push(key);
            }
        }
        var gender= gender_array.join();

        var url= "http://names.sinistercode.com:4242/api/names?format=json"
            + (starts_with ? "&starts-with=" + starts_with : "")
            + (ends_with ? "&ends-with=" + ends_with : "")
            + (sort ? "&sort=" + sort : "")
            + (contains_letters ? "&contains-letters=" + contains_letters : "")
            + (contains_string ? "&contains-string=" + contains_string : "")
            + (gender ? "&gender=" + gender : "")
            + (page ? "&page=" + page : "")
            + (page_size ? "&page-size=" + page_size : "")
            + (min_length ? "&min-length=" + min_length : "")
            + (max_length ? "&max-length=" + max_length : "");
        
        $.ajax({
            url: url
        }).then(function(data) {
            var list= '';
            for(var i= 0; i < data.results.length; i++) {
                list+= '<li style="float: left; min-width:200px;">'
                    + '<a href="/Users/jeya/Name_List.html?contains-letters='
                    + data.results[i]["name"] + '">'
                    + data.results[i]["name"] + '</a></li>';
            }
            $("#names").html(list);
        });  
    };
    $("#search").click(getNames);
    $("#names").click(getSimilarNames);
    $("#sort").change(getNames);
    $("#gender :checkbox").change(function () {
        if(this.checked) {
            genderhash[this.name]= 1;
        }
        else {
            genderhash[this.name]= 0;
        }
    });
    var ct= $.getUrlVar('contains-letters');
    if(ct) {
        $("#starts-with").val("");
        $("#ends-with").val("");
        $("#contains-letters").val(ct);
        $("#sort").val("length");
        getNames();
    }
});