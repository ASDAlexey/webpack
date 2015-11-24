"use strict";
let moment = require('moment');
let today=moment(new Date()).locale('ru');
console.log(today.format('DD MMM YYYY'));

