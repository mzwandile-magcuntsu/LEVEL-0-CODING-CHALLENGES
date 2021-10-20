function commonLetters(){
    var string1 = "house"
    var string2 = "computers"
    var common = string1.match(/[computers]/gi) 
    
    common.concat(['']).forEach(k => { console.log(k);})
    }
    commonLetters()
    