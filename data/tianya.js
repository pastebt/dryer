var divs = document.getElementsByTagName("div");
for (var i = 0; i < divs.length; i++) {
    if (! divs[i].hasAttribute("js_username")) { continue }
    if (divs[i].getAttribute("js_username") == "flingfog") {
        //divs[i].style.display = "none";
        var es = divs[i].getElementsByClassName("atl-content");
        for (var j = 0; j < es.length; j++) {
            es[j].style.display = "none";
        }
        var node=document.createElement("a");
        var textnode=document.createTextNode("显示");
        node.appendChild(textnode);
        var as = divs[i].getElementsByClassName("atl-head-reply");
        for (var j = 0; j < as.length; j++) {
            as[j].appendChild(node);
        }
    } else {
        var node=document.createElement("a");
        var textnode=document.createTextNode("屏蔽");
        node.appendChild(textnode);
        var as = divs[i].getElementsByClassName("atl-head-reply");
        for (var j = 0; j < as.length; j++) {
            as[j].appendChild(node);
        }
    }
}
