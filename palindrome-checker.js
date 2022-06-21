function palindrome(str) {
    let str1 = str.toLowerCase().replace(/[^a-z\d]/g, ""); //switch the lowercase and replace any other non alpanumerics with an empty string
    let reversedStr1 = str1.split('').reverse().join('');
    if(str1 === reversedStr1){
        return true
    }else{
        return false
    }
}
  
console.log(palindrome("eye"));