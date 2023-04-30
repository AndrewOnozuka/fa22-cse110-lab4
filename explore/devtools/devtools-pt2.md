# DevTools - Debugging

1. The bug was that `num1` and `num2` are being concatenated as strings instead of added as integers.
2. This can be fixed by setting both to be an integer using `parseInt()`. I simply did it when result is initialized, but you could also do it when you first get `num1` and `num2` as well and it should work the same.