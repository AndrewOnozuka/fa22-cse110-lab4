# Part 2

1. Line 12 returns `3`, because `i` ends up as 3 after looping through the for loop since `i` is incremented for each element in the array, which is `[100, 20, 300]`.
2. Line 13 returns `150`, because that is what `discountedPrice` ends up as after looping through, since the last element in the array 300 becomes 150 with the 0.5 discount.
3. Line 14 also returns "150", because of line 8, which is `finalPrice = Math.round(discountedPrice * 100) / 100;`. Since there is no rounding to be done, it is the same as before, resulting in 150.
4. The function returns `[50, 100, 150]`.