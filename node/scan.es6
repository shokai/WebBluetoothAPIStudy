"use strict";

import noble from "noble";

console.log("scanning BLE");

noble.on("stateChange", (state) => {
  if(state === "poweredOn"){
    noble.startScanning();
  }
  else{
    noble.stopScanning();
  }
});

noble.on("discover", (peripheral) => {
  console.log(peripheral);
  console.log("*****");
});
