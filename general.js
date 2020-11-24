document.getElementById("myurl").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("myurl").innerHTML = "готово епта)) копируй хуле";
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    document.getElementById("valueurl").innerHTML = url;
    const url2 = new URL(url)
    var nickname = url2.pathname;
    nickname = nickname.replace(/[\/\\]/g,'');
    nickname = nickname.replace(/[\m]/g,'🅼');
    document.getElementById("nicknamemodel").innerHTML = "вот такой у модели ник:  " + nickname;
  });
}
