# Part 2

1. Line 12 returns `3`, because `i` ends up as 3 after looping through the for loop since `i` is incremented for each element in the array, which is `[100, 20, 300]`.
2. Line 13 returns `150`, because that is what `discountedPrice` ends up as after looping through, since the last element in the array 300 becomes 150 with the 0.5 discount.
3. Line 14 also returns `150`, because of line 8, which is `finalPrice = Math.round(discountedPrice * 100) / 100;`. Since there is no rounding to be done, it is the same as before, resulting in 150.
4. The function returns `[50, 100, 150]`. We can verify this by logging the `var discounted` in to our console. This makes sense as the function `discountedPrices` takes an array of `prices` and applies the given `discount` on the array to be returned. 
5. Line 12 will be an `error` because the `let` declaration means the variable `i` can only be accessed within the loop, which means it is `not defined` when called elsewhere.
6. Line 13 will also cause an `error` for the same reasons. `discountedPrice` cannot be accessed outside of the loop due to the `let` declaration.
7. Line 14 will return `150` and not give an `error` because the `let` declaration was outside and before the loop. This allows it to be used through the function and gives us `150` for the same reasons as covered previously in question 3.
8. The function returns `[50, 100, 150]`. This is for the same reasons as previous questions 4 and 7. The `let discounted` was before the loop, so the answer from question 4 was not altered and our function was still able to return the correct output.
9. Line 11 will return an `error` because `i` cannot be accessed due to it's `let` declaration. See question 5.
10. Line 12 returns `3` because the variable `length` is set only once by `prices.length` and is not changed.
11. The function still outputs the correct `[50, 100, 150]`. The variable scopes are properly defined and `const` variables are not redefined and the `let` is not called or necessary outside of its own relevant block. The function works for the same reasons previously explained in questions 4 and 8.
12. A. `student.name`

    B. `student['Grad Year']`

    C. `student.greeting()`

    D. `student['Favorite Teacher'].name`

    E. `student.courseLoad[0]`

13. A. `32`. Since `'3'` is a string, it concatenates the 2 along with it assuming that it is also a string.

    B. `1`. Since `-` cannot be applied to strings, the `'3'` is treated like a number, and hence we get the outcome of 3 - 2.

    C. `3`. Since we have the `+` operator, null becomes the integer 0. Since adding 0 does not change the value, we get 3.

    D. `3null`. Similar to part A, since `'3'` is a string, it concatenates the null as a string also.

    E. `4`. `true` is equivalent to integer 1, and since the `+` operator adds the integers, we get 1 + 3 which is 4.

    F. `0`. The `+` operator assumes that we are dealing with integers, and since false maps to 0 and null is also 0, `0 + 0 = 0`.

    G. `3undefined`. Similar to parts A and D, since `'3'` is a string, it concatenates undefined as a string also.

    H. `NaN`. The `-` operator tells us we are dealing with integers, but since undefined converts to NaN, we get NaN.

14. 

