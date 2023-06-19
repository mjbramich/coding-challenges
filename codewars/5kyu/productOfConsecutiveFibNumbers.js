/* Description
The Fibonacci numbers are the numbers in the following integer sequence (Fn):

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such as

F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

F(n) * F(n+1) = prod.

Your function productFib takes an integer (prod) and returns an array:

[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
depending on the language if F(n) * F(n+1) = prod.

If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prod you will return

[F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
F(n) being the smallest one such as F(n) * F(n+1) > prod.

Example:
productFib(714) # should return [21, 34, true], 
productFib(800) # should return [34, 55, false], 
*/

// My solution
function productFib(prod) {
    let a = 0;
    let b = 1;

    for (let i = 1; i < prod; i++) {
        const temp = a;
        a = b;

        if (temp * a == prod) {
            return [temp, a, true];
        } else if (temp * a > prod) {
            return [temp, a, false];
        }
        b = a + temp;
    }
}
