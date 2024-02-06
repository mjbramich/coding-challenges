function fibonacciNumber(n: number) {
	// Base Case
	if (n <= 1) {
		return n;
	}

	// Sum of 2 previous numbers equals current number in sequence
	return fibonacciNumber(n - 1) + fibonacciNumber(n - 2);
}
