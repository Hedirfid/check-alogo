function string(str) {
  var x = str.toUpperCase();
  var t = x.split("");
  var nm = 1;
  var nv = 0;
  var result = [];
  for (var i = 0; i < t.length; i++) {
    if (t[i] === " ") {
      nm += 1;
    }
    if (
      t[i] == "O" ||
      t[i] == "U" ||
      t[i] == "I" ||
      t[i] == "A" ||
      t[i] == "E"
    ) {
      nv += 1;
    }
  }
  result.push(i - 1, nm, nv);
  return result;
}
