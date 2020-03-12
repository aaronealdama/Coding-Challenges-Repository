function likes(names) {
  likesVar = " likes this";
  likeVar = " like this";
  if (!names.length) {
    return "no one" + likesVar;
  } else if (names.length === 1) {
    return names[0] + likesVar;
  } else if (names.length === 2) {
    return names[0] + " and " + names[1] + likeVar;
  } else if (names.length === 3) {
    return names[0] + ", " + names[1] + " and " + names[2] + likeVar;
  } else if (names.length > 3) {
    return (
      names[0] +
      ", " +
      names[1] +
      " and " +
      (names.length - 2) +
      " others" +
      likeVar
    );
  }
}
