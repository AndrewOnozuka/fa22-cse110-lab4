# Part 1

1. Line 9 prints "values added: 20"
2. Line 13 prints "final result: 20"
3. Line 9 prints "values added: 20"
4. Line 13 returns an `error` because the variable scope of `let` means `result` cannot be accessed outside of it's block, therefore the call to `result` in line 13 is not defined.
5. Line 9 returns an `error` because the `const` declaration means the variable `result` cannot be redefined, therefore you cannot run line 7.
6. Line 13 also returns an error for the same reasons, line 7 cannot change the previous `const` declaration of result.

See the screenshot below for exact outputs!
![part1](/media/part1.png)

*note that the write up had a typo and so in the screenshot it says fa22 instead of sp23.
upon realising this I renamed my GitHub repository and recloned it.

![note](/media/note.png)