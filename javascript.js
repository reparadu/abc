// <<<<<<<<<<< --------------------- KK ------------------- >>>>>>>>>>>>> //
var fundAmountKK=19000;
var pointKK=0;
var fundAmountCO=22000000;
var pointCO=0;

function main () { 

function retrieveData_KK_ETH(){
  $.getJSON("https://api.kraken.com/0/public/Depth?pair=XETHZUSD", function(data) {
    
    //-- Vol Match --//
    
    while(true){
  var total = data["result"]["XETHZUSD"]["bids"][pointKK][0] * data["result"]["XETHZUSD"]["bids"][pointKK][1];
  if(fundAmountKK > total) fundAmountKK = fundAmountKK - total;
  else break;
  pointKK++;
    }

    while(true){
  var total = data["result"]["XETHZUSD"]["asks"][pointKK][0] * data["result"]["XETHZUSD"]["asks"][pointKK][1];
  if(fundAmountKK > total) fundAmountKK = fundAmountKK - total;
  else break;
  pointKK++;
    }
    var buyETH_KK = $("#KK-ETH_buychoice").text("Buy : " + data["result"]["XETHZUSD"]["asks"][pointKK][0]);
    var sellETH_KK = $("#KK-ETH_sellchoice").text("Sell : " + data["result"]["XETHZUSD"]["bids"][pointKK][0]);

    $("#sellETH_KK").text("Sell : " + data["result"]["XETHZUSD"]["bids"][pointKK][0]);

  });
}

function retrieveData_KK_XRP(){
  $.getJSON("https://api.kraken.com/0/public/Depth?pair=XXRPZUSD", function(data) {

    //-- Vol Match --//
    
    while(true){
  var total = data["result"]["XXRPZUSD"]["bids"][pointKK][0] * data["result"]["XXRPZUSD"]["bids"][pointKK][1];
  if(fundAmountKK > total) fundAmountKK = fundAmountKK - total;
  else break;
  pointKK++;
    }

    while(true){
  var total = data["result"]["XXRPZUSD"]["asks"][pointKK][0] * data["result"]["XXRPZUSD"]["asks"][pointKK][1];
  if(fundAmountKK > total) fundAmountKK = fundAmountKK - total;
  else break;
  pointKK++;
    }
   var buyXRP_KK = $("#KK-XRP_buychoice").text("Buy : " + data["result"]["XXRPZUSD"]["asks"][pointKK][0]);
   var sellXRP_KK = $("#KK-XRP_sellchoice").text("Sell : " + data["result"]["XXRPZUSD"]["bids"][pointKK][0]);  

   $("#buyXRP_KK").text("Buy : " + data["result"]["XXRPZUSD"]["asks"][pointKK][0]);
   
  });
}

// <<<<<<<<<<< --------------------- CO ------------------- >>>>>>>>>>>>> //
 
function retrieveData_CO_ETH(){
  $.getJSON("https://api.coinone.co.kr/orderbook/?currency=eth", function(data) {
    
    //-- Vol Match --//
     
    while(true){
  var total = data["bid"][pointCO]["price"] * data["bid"][pointCO]["qty"];
  if(fundAmountCO > total) fundAmountCO = fundAmountCO - total;
  else break;
  pointCO++;
    }

    while(true){
  var total = data["ask"][pointCO]["price"] * data["ask"][pointCO]["qty"];
  if(fundAmountCO > total) fundAmountCO = fundAmountCO - total;
  else break;
  pointCO++;
    }
    var buyETH_CO = $("#CO-ETH_buychoice").text("Buy : " + data["ask"][pointCO]["price"]);
    var sellETH_CO = $("#CO-ETH_sellchoice").text("Sell : " + data["bid"][pointCO]["price"]);

    $("#buyETH_CO").text("Buy : " + data["ask"][pointCO]["price"]);
  });
}

function retrieveData_CO_XRP(){
  $.getJSON("https://api.coinone.co.kr/orderbook/?currency=xrp", function(data) {

    //-- Vol Match --//
  
    while(true){
  var total = data["bid"][pointCO]["price"] * data["bid"][pointCO]["qty"];
  if(fundAmountCO > total) fundAmountCO = fundAmountCO - total;
  else break;
  pointCO++;
    }

    while(true){
  var total = data["ask"][pointCO]["price"] * data["ask"][pointCO]["qty"];
  if(fundAmountCO > total) fundAmountCO = fundAmountCO - total;
  else break;
  pointCO++;
    }
    var buyXRP_CO = $("#CO-XRP_buychoice").text("Buy : " + data["ask"][pointCO]["price"]);
    var sellXRP_CO = $("#CO-XRP_sellchoice").text("Sell : " + data["bid"][pointCO]["price"]);

    $("sellXRP_CO").text("Sell : " + data["bid"][pointCO]["price"]);
  });
}

//<<<< Call >>>>//
  

// <<<<<<<<<<< --------------- Initiates Data ------------- >>>>>>>>>>>>> //

retrieveData_KK_ETH();
retrieveData_KK_XRP();
retrieveData_CO_ETH();
retrieveData_CO_XRP();

// <<<<<<<<<<< ------------------ Interval ---------------- >>>>>>>>>>>>> //

$(document).ready(
  function() {
    setInterval(retrieveData_KK_ETH, 3000);
    setInterval(retrieveData_KK_XRP, 3000);
    setInterval(retrieveData_CO_ETH, 3000);
    setInterval(retrieveData_CO_XRP, 3000);
    // 1 sec = 1000 millisecs
  }
);

