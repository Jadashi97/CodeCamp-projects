function palindrome(str) {
    let str1 = str.toLowerCase().replace(/[^a-z\d]/g, " "); //switch the lowercase and replace any other non alpanumerics with an empty string
    return str1.split('').reverse().join('');
    
}
  
console.log(palindrome("_BaBooon"));