function timeConverter(num)
 { 
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
  return hours + " Hours, " + minutes + " Minutes";       
}

console.log(timeConverter(130))
console.log(timeConverter(495))
console.log(timeConverter(1541))











