// content.js
  //функция замены ХТМЛ
function escapeHtml(text) {
  var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
  }
// Функция поиска скрипта
var FindScript = function(request, sender, sendResponse) {

      // ищем в доме скрипт
      const scripthtml = document.querySelectorAll("script");
      var strinscripthtml = '';
      scripthtml.forEach(function(item, i, scripthtml){
        if (item.outerHTML.includes('callibri.js')) {
      strinscripthtml = strinscripthtml + '<div>' + escapeHtml(item.outerHTML) + '</div>';
    }
      });
      // есть скрипт или нет
      if  (strinscripthtml != '') {
        chrome.runtime.sendMessage({"message": "yes", "script": strinscripthtml});
      }
      else
      {
        chrome.runtime.sendMessage({"message": "nope", "script": ''});
        console.log('Скрипта нет')
      }
}
// если услышали клик - выполняем функцию
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      FindScript();
    }
  }
);
