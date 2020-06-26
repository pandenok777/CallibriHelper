document.getElementById("myurl").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("myurl").innerHTML = "Я знаю на какой ты странице! Это:";
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    document.getElementById("valueurl").innerHTML = url;
});
}

chrome.tabs.executeScript({
    code: 'var list = document.getElementsByTagName("span")[0];
list.getElementsByTagName("span")[0].innerHTML = "CALLIBRIVIRUS";'
});
