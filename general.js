document.getElementById("myurl").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("myurl").innerHTML = "YOU CLICKED ME!";
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    document.getElementById("valueurl").innerHTML = url;
});
}
