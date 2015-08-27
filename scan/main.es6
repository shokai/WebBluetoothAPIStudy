"use strict";
/*global $*/

function info(msg){
  if(typeof msg !== "string") msg = msg.toString();
  $("#log").append($("<li>").text(msg));
}

var req = {
  filters: [
    {
      services: [
        "713d0000-503e-4c75-ba94-3148f18d941e" // blendmicro
      ]
    }
  ]
};


function scan(){
  if(!(navigator.bluetooth && typeof navigator.bluetooth.requestDevice === "function")){
    return info("Web Bluetooth API is not supported");
  }

  info("start scanning - " + JSON.stringify(req));
  navigator.bluetooth.requestDevice(req)
    .then(device => {
      console.log(device);
      info(`found "${device.name}"`);
      return device.connectGATT();
    })
    .then(server => {
      console.log(server);
    })
    .catch(err => {
      console.error(err);
      info(err);
    });
}

$(function(){
  $("#btn_scan").click(scan);
});

