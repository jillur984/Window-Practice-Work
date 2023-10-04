console.log(window.alert()) // For Alert Window

console.log(window.location) // Give us Windows Root Location

console.log(window.location.href) // Give Server Link

console.log(window.location.hostname)

console.log(window.confirm("Are you want to delete this item")) 
// Give Warning before Delete Item


console.log(window.alert("Hello Jillur")) // Give Alert in Window


// Windows.clientInformation() //method

function clientInformation(){
    return "you are a VIP Client"
}

console.log(window.clientInformation())


console.log(window.innerHeight)

console.log(window.innerWidth)

// Window.Open method Below Give Example


let url="https://translate.google.com/"
let feature="this is Feature"

const button1=document.getElementById("btn1")
button1.addEventListener("click",function(){
    window.open(url,"google Translate",feature)
})


// Windows Navigation

console.log(window.credentialless);


// Window Origin
console.log(window.origin)

