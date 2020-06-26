document.getElementById("myurl").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("myurl").innerHTML = "Я знаю на какой ты странице! Это:";
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    document.getElementById("valueurl").innerHTML = url;
});
}

chrome.browserAction.onClicked.addListener(function(tab) {
  console.log('Looking on the page' + tab.url + ' element with desired classname');
  chrome.tabs.executeScript({
    code: 'var testElements = document.getElementsByClassName("callibri_phone"); var el = testElements[0]; if (el) {document.getElementById("callibriphonechecker").innerHTML = 'Опачки! Да на странице есть размеченные дефолтным классом элементы!';}'
  });
});
