let n1=0;
let n2=1;
let n3=1;

function Fibonacci(num){
  for(i = 1; i < num ;i++){      
    //  סדרת פיבונאצי איבריה הראשונים 1 ,1 
    // ולאחר מכן כל איבר שווה לסכום 2 האיברים הקודמים לו
    // מסכם את 2 האיברים הקודמים n3     
    n1 = n2;      
    n2 = n3;     
    n3 = n1 + n2;      
  }
  return n2   
 }  
 console.log(Fibonacci(7));  
 

 function Fibonacci2(num){
   // Golden ratio - "על פי "יחס הזהב N חישוב מתמטי למציאת איבר   
   let alpa = 1.618034;  
   return Math.floor((alpa**num - (1-alpa)**num)/Math.sqrt(5))      
 }
console.log(Fibonacci2(7))