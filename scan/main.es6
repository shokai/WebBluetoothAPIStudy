"use strict";
/*global $*/

function info(msg){
  if(typeof msg !== "string") msg = msg.toString();
  $("#log").prepend($("<li>").text(msg));
}

var services =
      ["713d0000-503e-4c75-ba94-3148f18d941e",
       "40e714e8-d869-4b99-9b12-3db963d661f3"];

function scan(){
  if(typeof navigator.bluetooth.requestDevice !== "function"){
    return info("Web Bluetooth API is not supported");
  }

  info("start scanning");
  navigator.bluetooth.requestDevice({filters: {services: []}})
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

