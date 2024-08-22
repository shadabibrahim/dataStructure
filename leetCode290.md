290 Word Pattern
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false

```
function wordPattern(pattern, s) {
    const words = s.split(' ');

    if (pattern.length !== words.length) {
        return false;
    }

    const charToWord = new Map();
    const wordToChar = new Map();

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        if (charToWord.has(char) && charToWord.get(char) !== word) {
            return false;
        }

        if (wordToChar.has(word) && wordToChar.get(word) !== char) {
            return false;
        }

        charToWord.set(char, word);
        wordToChar.set(word, char);
    }

    return true;
}
```

How This Works:

	•	Map: The Map object is used instead of a plain object, which allows any string to be used as a key, including "constructor".
	•	.has() and .get(): These methods of Map are used to check for the presence of a key and to retrieve its value, respectively.

Explanation for Your Example:

Input:

	•	pattern = "abba"
	•	s = "dog constructor constructor dog"

Output: true

Mapping Process:

	1.	‘a’ maps to "dog".
	2.	‘b’ maps to "constructor".
	3.	The second ‘b’ should map to "constructor" (it does).
	4.	The second ‘a’ should map to "dog" (it does).
