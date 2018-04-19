const theBeatlesPlay = (musicians, instruments) => {
  var arr = [];
  
  for(let i = 0; i<musicians.length; i++){
    for(let i = 0; i<instruments.length; i++){
      arr.push(musicians[i] + ' ' + instruments[i])
    }
  }
  return arr
};