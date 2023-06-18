// 53. Utility Type - Paramètres
function fetchUser(id, username) {
    console.log("Fetch user id ".concat(id, " | username ").concat(username));
}
function fetchLoggedUser() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    fetchUser.apply(void 0, params);
}
fetchLoggedUser(3, "Marion");
