"use strict";

import bleno from "bleno";

var uuids = [
  "180f", // battery_service
  "D123DF3F-A9F6-4D33-9134-28CB3AA4FA91"
];

console.log(uuids);

bleno.startAdvertising("mba13", uuids, (err) => {
  console.error(err);
});
