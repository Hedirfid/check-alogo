function sum(a, b) {
  var somme = 0;
  var s = [];
  for (var i = 0; i < a.length; i++) {
    s.push(a[i]);
  }
  for (var i = 0; i < b.length; i++) {
    s.push(b[i]);
  }
  for (var i = 0; i < s.length; i++) {
    var bool = -1;
    for (var j = 0; j < s.length; j++) {
      if (s[i] == s[j]) {
        bool += 1;
      }
    }
    if (bool == 0) {
      somme += s[i];
    }
  }

  return somme;
}
