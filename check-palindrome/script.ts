export function checkPalindrome(inputString: string): boolean {
  const originalW9ord = inputString.toLowerCase();
  const reversedWord = originalW9ord.split('').reverse().join('');
  return originalW9ord === reversedWord;
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
