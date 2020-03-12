function array_diff(a, b) {
  for (let i = 0; i < a.length + 1; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        let index = a.indexOf(a[i]);
        if (index > -1) {
          a.splice(index, 1);
        }
        i = 0;
      }
    }
  }
  return a;
}
