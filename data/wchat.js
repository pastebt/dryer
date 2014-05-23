//document.body.innerHTML = "<h1>Page matches ruleset for wchat</h1>"
//
var lis = document.getElementsByTagName("li");
for (var i = 0; i < lis.length; i++) {
    var pos = lis[i].innerHTML.indexOf("-- [APPLEII]");
    if (pos != -1) {
        //lis[i].innerHTML = "";
        //lis[i].style = "display:none;";
        lis[i].style.display="none";
    }
}
