export function isCaseInsensitivePalindrome(inputString: string): boolean {

  const originalLowerCase = inputString.toLocaleLowerCase();
  const reversedWord = originalLowerCase.split('').reverse().join('');

  return originalLowerCase === reversedWord;
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));