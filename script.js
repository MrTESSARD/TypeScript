// 54 - Utility Type - ReturnType
function fetchUser1(id, username) {
    return {
        id: id,
        username: username
    };
}
function fetchLoggedUser1() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    var memberData = fetchUser.apply(void 0, params);
    console.log(memberData);
    var user = {
        id: 4,
        username: "Toto"
    };
}
fetchLoggedUser(3, "Marion1");
