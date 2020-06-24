document.getElementById("myurl").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("myurl").innerHTML = "YOU CLICKED ME!";
  chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    document.getElementById("valueurl").innerHTML = tabs;
});
}
