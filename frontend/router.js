"use strict";
let moduleName = location.pathname.slice(1);
require("bundle!./routes/" + moduleName)(function(route){
    route();
});
//let context = require.context('./routes', false);// false - означае тчто вложенные папки в папке ./routes не использовать
