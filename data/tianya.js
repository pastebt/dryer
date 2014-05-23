var divs = document.getElementsByTagName("div");
for (var i = 0; i < divs.length; i++) {
    if (divs[i].getAttribute("js_username") == "EDbird") {
        //divs[i].style.display = "none";
        var es = divs[i].getElementsByClassName("atl-content");
        for (var j = 0; j < es.length; j++) {
            es[j].style.display = "none";
        }
    }
}
