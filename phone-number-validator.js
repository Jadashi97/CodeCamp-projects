function telephoneCheck(str) {
    //  /^(1\s?)?/ - this checks if country code is provided and checks for possible spacing

    // (\(\d{3}\)|\d{3})[\s\-]? - checks that area code is 3 numbers possibly enclosed in parenthesis and also matches the space or hyphen after that
    
    // \d{3}[\s\-]?\d{4}$ - checks  that a 7 digit number possibly broken into 3 - 4 format. Ensures str ends in number
    
    let num = str.search(/^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/);
    if(num > -1){
        return true;
    }else{
        return false;
    }
}
  
console.log(telephoneCheck("612-555-5555"));