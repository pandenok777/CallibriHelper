document.getElementById("myurl").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("myurl").innerHTML = "Я знаю на какой ты странице! Это:";
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    document.getElementById("valueurl").innerHTML = url;
});
}

function(){
  var today = new Date();
  $("#today_date").html(today.getDate()+"."+(parseInt(today.getMonth())+1)+"." + today.getFullYear());
}
