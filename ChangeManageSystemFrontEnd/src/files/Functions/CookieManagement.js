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
function deleteCookie (keyName, keyValue, domain) {
  if (getCookie(keyName)) {
    document.cookie = keyName + "=" +
    ((keyValue) ? ";path="+keyValue:"") +
    ((domain)?";domain="+domain:"") +
    ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
  }
} 

export { makeCookie, getCookie, deleteCookie };
