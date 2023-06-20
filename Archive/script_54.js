"use strict";
// 54 - Utility Type - ReturnType
function fetchUser1(id, username) {
    return {
        id,
        username
    };
}
function fetchLoggedUser1(...params) {
    const memberData = fetchUser(...params);
    console.log(memberData);
    let user = {
        id: 4,
        username: "Toto"
    };
}
fetchLoggedUser(3, "Marion1");
