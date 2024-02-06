function isAlphaNumericChar(char) {
  var code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numberic (0 - 9)
    !(code > 64 && code < 91) && // numberic (A - Z)
    !(code > 96 && code < 123) // numberic (a - z)
  ) {
    return false;
  }
  return true;
}
