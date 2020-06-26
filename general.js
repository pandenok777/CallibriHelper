document.getElementById("myurl").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("myurl").innerHTML = "Я знаю на какой ты странице! Это:";
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    document.getElementById("valueurl").innerHTML = url;
});
}

chrome.tabs.executeScript({
    code: 'var testElements = document.getElementsByTagName(div); var el = testElements[0]; if (el) {el.innerHTML = 'ЙА ВИРУС МЕНЯЮЩИЙ САЙТ'}'
});
