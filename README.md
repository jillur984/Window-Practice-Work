- [Function]

Function is a Specific Block and We can do specific task by Using Function and Where we need Reuse,We can also reduce function by Function calling.

- #### Function Practice
```js
function getBigNumber(){

    const a=10;
    const b=20;
    
     if(a>b){
     console.log("A is Small")
    }
    else{
       console.log("A is Big")
    }
}

getBigNumber()
..............................

 - #### Case Sensitive in JS
```js

function jillur(){
    return console.log("Hello")
}

Jillur() // Not Work Due to Case Sensitive


-####Arrow Function

let jillur=test=()=>{
  return console.log("this is Arrow Function")
}

console.log(test())
