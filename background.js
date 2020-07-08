// background.js
// Вызывается, когда пользователь нажимает на действие браузера.
chrome.browserAction.enable(function(tab) {
  // Отправить сообщение на активную вкладку
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});


// Слушаем сообщения
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "yes" ) {
      // Выводим че нашли
      document.getElementById("checkscript").innerHTML = '<span class="green">Скрипт есть!))))</span>';
      document.getElementById("mytext").innerHTML = request.script;
    }
    else if (request.message === "nope")
    {
      document.getElementById("checkscript").innerHTML = '<span class="red">Скрипта нет!</span>';
      document.getElementById("mytext").innerHTML = "";
    }
  }
);
