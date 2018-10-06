// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

function notify(message) {
  chrome.notifications.create({
    title: 'from Backgroud',
    type: 'basic',
    iconUrl: 'images/get_started48.png',
    message
  });
}

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
    notify("onInstalled");
  });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          /*pageUrl: {/*hostEquals: '.'/hostContains: '.'},*/
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });

});


var cache = {}

chrome.runtime.onMessage.addListener((request, sender, response) => {
    //notify("onMessage cmd=" + request.cmd);
    if (request.cmd == 'read-tab') {        // fired by click button
        notify("exec content.js");
        chrome.tabs.executeScript(//request.tab.id,
                                  //{ file: 'content.js' }
                                 {code: `chrome.runtime.sendMessage(
                                           {cmd: 'open-tab',
                                            dat: document.documentElement.outerHTML
                                           });`}
                                 )
    } else if (request.cmd == 'open-tab') { // filed by ^
        notify("open-tab: 127.0.0.1");
        chrome.tabs.create({url: "http://127.0.0.1:8081/",
                           openerTabId: sender.tab.id,
                           index: sender.tab.index + 1 },
            (tab) => {
                //cache[tab.id] = request.dat
                // FIXME clean it
                chrome.tabs.executeScript(tab.id, {file: 'content.js' });
                notify("after open-tab, send save-tab")
                chrome.tabs.sendMessage(tab.id, 
                                        {cmd: 'save-tab',
                                         tab: tab,
                                         dat: request.dat});
            }
        );
    /*} else if (request.cmd == 'save-tab') { // fired by ^
        notify("save-tab: " + request.dat);
        //chrome.tabs.executeScript(request.tab.id, {
        //    code: `alert("in new tab");`
        //})*/
    }
})
