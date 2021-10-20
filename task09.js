function findVowels(){
  var str = "Sofrware development" 
  var vowels = str.match(/[aeiou]/gi) 
     
  vowels.concat(['']).forEach(k => { console.log(k);})
}
findVowels()


  



