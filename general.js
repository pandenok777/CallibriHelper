document.getElementById("myurl").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("myurl").innerHTML = "готово епта)) копируй хуле";
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    document.getElementById("valueurl").innerHTML = url;
});
    var nickname = url.replace(/^https?\:\/\/chaturbate\.com.*\/(.*?)\/);
    document.getElementById("nicknamemodel").innerHTML = nickname;
}
