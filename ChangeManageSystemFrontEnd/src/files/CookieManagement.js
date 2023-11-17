function makeCookie(keyName, keyValue) {
    document.cookie = keyName + "=" + keyValue;
    // console.log(document.cookie);
}
function getCookie(keyName) {
    const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith(keyName + "="))
    ?.split("=")[1];
    // console.log(cookieValue);
    return cookieValue;
}

export {makeCookie, getCookie}