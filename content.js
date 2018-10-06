
/*
var content = document.documentElement.outerHTML;
chrome.runtime.sendMessage({cmd: 'open-tab',
                            dat: content
                            });
*/

function notify(message) {
  chrome.notifications.create({
    title: 'from Content',
    type: 'basic',
    iconUrl: 'images/get_started48.png',
    message
  });
}


chrome.runtime.onMessage.addListener((request, sender, response) => {
    //notify(request.cmd);
    document.documentElement.innerHTML = "<html>abcd</html>";
}
