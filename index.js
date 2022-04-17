function ShowLocalDate() {
  var dNow = new Date();
  var localdate =
    dNow.getMonth() +
    1 +
    "/" +
    dNow.getDate() +
    "/" +
    dNow.getFullYear() +
    " " +
    dNow.getHours() +
    ":" +
    dNow.getMinutes();
  document.getElementById("display").innerHTML = localdate;
}
