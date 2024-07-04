function sum(x,y,...args){
    console.log('arg: ',args)
    return x+y
}
console.log("rest: ",sum(1,2,3,4,5,6));

function everything(...a){
    console.log('everything',a)
}
everything('hello',1,2,true)

//for function call
function sum2(...num){
    return num.reduce((acc,n)=>acc+n,0);
}
const num = [1,2,3,55,324,234,24,234,234,23,423,423,4,324,3,43,43,43,45,34,53,434]
console.log(sum2(...num));

function sum(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
function calc(a,b,callBack){
  return  callBack(a,b)
}
console.log(calc(9,10,sum));