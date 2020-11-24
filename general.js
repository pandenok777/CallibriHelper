document.getElementById("myurl").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("myurl").innerHTML = "готово епта)) копируй хуле";
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    document.getElementById("valueurl").innerHTML = url;
    const url2 = new URL(url)
    var nickname = url2.pathname;
    nickname = nickname.replace(/[\/\\]/g,'');
    nickname = nickname.replace(/[\a]/g,'🅰');
    nickname = nickname.replace(/[\b]/g,'🅱');
    nickname = nickname.replace(/[\c]/g,'🅲');
    nickname = nickname.replace(/[\d]/g,'🅳');
    nickname = nickname.replace(/[\e]/g,'🅴');
    nickname = nickname.replace(/[\f]/g,'🅵');
    nickname = nickname.replace(/[\g]/g,'🅶');
    nickname = nickname.replace(/[\h]/g,'🅷');
    nickname = nickname.replace(/[\i]/g,'🅸');
    nickname = nickname.replace(/[\j]/g,'🅹');
    nickname = nickname.replace(/[\k]/g,'🅺');
    nickname = nickname.replace(/[\l]/g,'🅻');
    nickname = nickname.replace(/[\n]/g,'🅽');
    nickname = nickname.replace(/[\o]/g,'🅾');
    nickname = nickname.replace(/[\p]/g,'🅿');
    nickname = nickname.replace(/[\q]/g,'🆀');
    nickname = nickname.replace(/[\r]/g,'🆁');
    nickname = nickname.replace(/[\s]/g,'🆂');
    nickname = nickname.replace(/[\t]/g,'🆃');
    nickname = nickname.replace(/[\u]/g,'🆄');
    nickname = nickname.replace(/[\v]/g,'🆅');
    nickname = nickname.replace(/[\w]/g,'🆆');
    nickname = nickname.replace(/[\x]/g,'🆇');
    nickname = nickname.replace(/[\y]/g,'🆈');
    nickname = nickname.replace(/[\z]/g,'🆉');
    nickname = nickname.replace(/[\1]/g,'𝟙');
    nickname = nickname.replace(/[\2]/g,'𝟚');
    nickname = nickname.replace(/[\3]/g,'𝟛');
    nickname = nickname.replace(/[\4]/g,'𝟜');
    nickname = nickname.replace(/[\5]/g,'𝟝');
    nickname = nickname.replace(/[\6]/g,'𝟞');
    nickname = nickname.replace(/[\7]/g,'𝟟');
    nickname = nickname.replace(/[\8]/g,'𝟠');
    nickname = nickname.replace(/[\9]/g,'𝟡');
    nickname = nickname.replace(/[\0]/g,'𝟘');
    document.getElementById("nicknamemodel").innerHTML = nickname + " + 🅿🅾🅲🅾🅼🅰🆇🅰 = :biglover ";
  });
}
