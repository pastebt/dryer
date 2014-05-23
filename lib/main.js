// Import the page-mod API
var pageMod = require("sdk/page-mod");
// Import the self API
var self = require("sdk/self");
 
// Create a page mod
// It will run a script whenever a ".org" URL is loaded
// The script replaces the page contents with a message
pageMod.PageMod({
  include: "*.org",
    contentScript: 'document.body.innerHTML = ' +
                     ' "<h1>Page matches ruleset for *.org</h1>";'
});

pageMod.PageMod({
  include: /.*\/phh\/list.phh.*/,
  contentScriptFile: self.data.url("wchat.js")
});

pageMod.PageMod({
  include: /.*bbs\.tianya\.cn\/.*/,
  contentScriptFile: self.data.url("tianya.js")
});
