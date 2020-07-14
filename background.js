//background.js

// Слушаем сообщения
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "callibri" && request.script != '' ) {
      chrome.browserAction.setIcon({ path: { "19": "icongreen-19.png",
                                       "38": "icongreen-38.png" } });
      document.getElementById("checkscript").innerHTML = 'СРОБОТОЛО';
    }
    else
    {
      chrome.browserAction.setIcon({ path: { "19": "iconred-19.png",
                                       "38": "iconred-38.png" } });;
    }
    });
