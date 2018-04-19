const theBeatlesPlay = (musicians, instruments) => {
  let arr = [];
  
  for(let i = 0; i<musicians.length; i++){
      arr.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return arr;
};


const johnLennonFacts = (facts) => {
  let arr = [];
  let i = 0;
  
  while(i<facts.length){
    arr.push(facts[i] + '!!!');
    i++;
    
  }
  return arr;
};

const iLoveTheBeatles = (n) => {
  let arr = [];
  let i = 0;
  const str = 'iLoveTheBeatles';
  do{
    arr.push(str);
  }
  while (n<15){
    i++;
  }
  return arr;
};

