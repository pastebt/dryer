// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

function notify(message) {
  chrome.notifications.create({
    title: 'from POPUP',
    type: 'basic',
    iconUrl: 'images/get_started48.png',
    message
  });
}


let pbt = document.getElementById('pbt');
pbt.onclick = function(element) {
    notify("pbt.onclick");
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        notify("sendMessage to " + tabs[0].id + ": read-tab");
        //chrome.tabs.sendMessage(tabs[0].id, {cmd: 'read-tab'});
        chrome.runtime.sendMessage({cmd: 'read-tab'});
    });
  
};
