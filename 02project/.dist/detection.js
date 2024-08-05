"use strict";
function detect(val) {
    if (typeof val === 'string') {
        return val.toUpperCase();
    }
    return val + 5;
}
function detection(val) {
    if (!val) {
        console.log('Pls provide ID');
        return;
    }
    return val.toUpperCase();
}
function isAdminAccount(account) {
    if ('isAdmin' in account) {
        return account.isAdmin;
    }
}
