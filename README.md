- [Function]

Function is a Specific Block and We can do specific task by Using Function and Where we need Reuse,We can also reuce function by Function calling.

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

```

### Function Case Sensitive Practise

```js

function jillur(){
    return console.log("Hello")
}

Jillur() // Not Work Due to Case Sensitive


- [Arrow Function]

let jillur=test=()=>{
  return console.log("this is Arrow Function")
}

console.log(test())

```

- Anonymous Function-When a Function have no Argument and Parametar we can called it Anonymous Function

```JS

let show = function() {
    console.log('Anonymous function');
};

show();
````


- [Array in Programming]

Array is a Object that Can Store Multiple at Once.

### Constructor
```js
const arr=Array()

console.log(arr) // it console Array Contructor
````

### how to create a Array with Values
```js

const numbers = [2,4,6,8] // array of numbers
const fruits = ['Mango','Pine-Apple'] // array of strings, fruits

console.log('Numbers:'numbers.length)  // Show Number Length
console.log('Number of Fruits:'fruits.length) // Show Fruits Length

````

### [Createing a Array Using Split]
- ```js

  let country="Bangladesh"

  console.log(country.split(''));  // Result will be ['B','A','N','G','L','A','D','E','S','H']
  
  ```

  ### [Modifying Array Element]
  ```js
 
  const numbers = [1, 2, 3, 4, 5]
  
numbers[0] = 10      // changing 1 at index 0 to 10

numbers[1] = 20      // changing  2 at index 1 to 20

console.log(numbers) // Result Will be [10, 20, 3, 4, 5]

``

### [Concate an Array]
```js

const a=[1,2,3]

const b=[4,5,6]

const c=a.concat(b)

console.log(c)  // result will be:['1','2','3','4','5','6']
```

### [Array Include Method]
```js

- const numbers = [1, 2, 3, 4, 5]

console.log(numbers.includes(5)) // true

console.log(numbers.includes(0)) // false

console.log(numbers.includes(1)) // true

console.log(numbers.includes(6)) // false

```
### [Callback Function]
```js
function name(a,b){

   console.log("I am "  + a)

   jillur()
 
}

function jillur(){

    console.log("I am a good boy")

}

const result=name('imon' ,jillur)

console.log(result) // Result Will be: I am Imon
 I am a good boy

  
  















