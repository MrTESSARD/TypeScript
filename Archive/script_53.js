"use strict";
// 53. Utility Type - Paramètres
function fetchUser(id, username) {
    console.log(`Fetch user id ${id} | username ${username}`);
}
function fetchLoggedUser(...params) {
    fetchUser(...params);
}
fetchLoggedUser(3, "Marion");
