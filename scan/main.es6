"use strict";
/*global $*/

function info(msg){
  if(typeof msg !== "string") msg = msg.toString();
  $("#log").append($("<li>").text(msg));
}

var req = { filters: [{ services: ["generic_access", "battery_service"] }] };

/*
var req = {
  filters: [
    {
      services: [
        "40e714e8-d869-4b99-9b12-3db963d661f3"
      ]
    }
  ]
};
/**/


function scan(){
  if(!(navigator.bluetooth && typeof navigator.bluetooth.requestDevice === "function")){
    return info("Web Bluetooth API is not supported");
  }

  info("start scanning - " + JSON.stringify(req));
  navigator.bluetooth.requestDevice(req)
    .then(function(device){
      console.log(device);
      info(`found "${device.name}"`);
    })
    .catch(function(err){
      console.error(err);
      info(err);
    });
}

$(function(){
  $("#btn_scan").click(scan);
});

