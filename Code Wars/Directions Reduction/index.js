function dirReduc(arr) {
  for (var i = arr.length; i >= 0; i--) {
    if (arr[i] === "NORTH" && arr[i - 1] === "SOUTH") {
      arr.splice(i, 1);
      arr.splice(i - 1, 1);
    } else if (arr[i] === "SOUTH" && arr[i - 1] === "NORTH") {
      arr.splice(i, 1);
      arr.splice(i - 1, 1);
    } else if (arr[i] === "EAST" && arr[i - 1] === "WEST") {
      arr.splice(i, 1);
      arr.splice(i - 1, 1);
    } else if (arr[i] === "WEST" && arr[i - 1] === "EAST") {
      arr.splice(i, 1);
      arr.splice(i - 1, 1);
    }
  }
  return arr;
}
