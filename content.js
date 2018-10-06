
/*
var content = document.documentElement.outerHTML;
chrome.runtime.sendMessage({cmd: 'open-tab',
                            dat: content
                            });
*/
/*
function notify(message) {
  chrome.notifications.create({
    title: 'from Content',
    type: 'basic',
    iconUrl: 'icon/48.png',
    message
  });
}


notify("this is content");
chrome.runtime.sendMessage({cmd: 'save-tab',
                            dat: "document.documentElement.outerHTML"
                           });
chrome.runtime.onMessage.addListener((request, sender, response) => {
    document.documentElement.innerHTML = "<html>abcd</html>";
}
*/

chrome.runtime.sendMessage({cmd: 'save-tab'}, (resp) => {
    document.getElementById("bind").innerText = resp.dat;
});
