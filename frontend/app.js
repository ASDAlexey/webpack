"use strict";
document.getElementById('loginButton').addEventListener("click", function () {
    require.ensure([], function (require) {
        let login = require('./login');
        login();
    });
}, false);
document.getElementById('logoutButton').addEventListener("click", function () {
    require.ensure([], function (require) {
        let logout = require('./logout');
        logout();
    });
}, false);

