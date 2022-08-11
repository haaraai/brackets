module.exports = function check(str, bracketsConfig) {
  // let arr = [];
  // let i = 0;
  // bracketsConfig.map((el) => {
  //   arr.push(el.join(""));
  // })
  // do {
  //   let newArr = arr[i];
  //   if (str.includes(newArr)) {
  //     str = str.replace(newArr, '');
  //     i = -1;
  //   }
  //   i++;
  // } while (i < arr.length);
  // return str.length === 0;
  
  for (let i=0; i<bracketsConfig.length; i++){
     if (str.includes(bracketsConfig[i].join(''))) {
     str = str.replace(bracketsConfig[i].join(''),'');
     i=-1;
   }
 }
 return (str === '');
 

};