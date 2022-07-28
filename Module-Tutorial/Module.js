//single module exports
const sum = (num1,num2)=> num1 + num2;
//module.exports = sum;

//multi module exports
const Pi = 12.23;
class data{
  constructor(){
    return 'constructor executed!';
  }
}

module.exports = { sum:sum, pi:Pi, dataClass:data };