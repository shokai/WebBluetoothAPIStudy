"use strict";

import bleno from "bleno";

var uuids = [
  "180f", // battery_service
];

console.log(uuids);

bleno.startAdvertising("mba13", uuids, (err) => {
  console.error(err);
});
