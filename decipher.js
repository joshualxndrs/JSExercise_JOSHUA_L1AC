function codeDecipher(e_message, key) {
    var key_array = Array.from(key.toString());
    var length = e_message.length-key_array.length;
    
    var result_text = []
    for (index = 0; index<length; index++){
        
        key_array.push(key_array[index])
    }
    for (index = 0; index < e_message.length; index++){
        result_text.push(e_message[index]-key_array[index])
    } 
    function messagedecipher(number){
        var alphabet = String.fromCharCode(number + 64);
        
        return alphabet;
    }
    var alphabets = [];
    result_text.forEach(function(index) {
        alphabets.push(messagedecipher(index));
    });

    var unlocked_message = alphabets.toString().replace(/,/g,"")
    return (unlocked_message) || undefined
}

console.log(codeDecipher([20, 12, 18, 30, 21], 1939))
console.log(codeDecipher([6, 4, 1, 3, 9, 20], 100))