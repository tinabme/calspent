'use strict';

const pulldownData = require('./activity.json');
const metData = require('./metValues.json');

function populatePulldown(actdata) {
  let act = document.getElementById("activity");
  
  for(let key in actData) {
    let option = document.createElement("option");
    option.innerHTML = actData[key];
    option.value = key;
    act.append(option);
  }
}

populatePulldown(pulldownData);


