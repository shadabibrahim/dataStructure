var countPrimes = function (n) {
    if (n < 2) return 0;
    let primes = new Array(n).fill(true);
    primes[0] = primes[1] = false;
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (primes[i]) {
            for (j = i * i; j < n; j = j + i) {
                primes[j] = false;
            }
        }
    }
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (primes[i]) {
            count++;
        }
    }
    return count;

};

	The function countPrimes takes an integer n as input and returns the count of prime numbers less than n.
	•	If n is less than 2, the function returns 0 since there are no prime numbers below 2.
	•	The primes array marks all numbers as true initially. Then, using the Sieve of Eratosthenes algorithm, multiples of each prime are marked as false.
