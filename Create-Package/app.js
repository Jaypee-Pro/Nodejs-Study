//to uninstall package 
//npm uninstall packagename

const _ = require('lodash')
//lodash fill(array, value string, start index, last index)
let example = _.fill([1,2,3,4,5],'mango',1,4)
console.log(example)