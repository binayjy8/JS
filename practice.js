let score = 90;

if (score >= 100) {
    console.log("Congratulation for  halfcentury");
    if (score >= 50) {
        console.log(" Century");
    } else {
        console.log("Good try");
    }
} else {
    console.log("hard luck");
}

let str = "appendix";

if(str[0] === 'a' && str.length>3) {
    console.log("Good String");
} else {
    console.log("Bad String");
}

if("a") {
    console.log("true value");
} else {
    console.log("false value");
}

let color = "red";

switch(color){
    case "red":
        console.log("stop");
        break;
        case"green":
        console.log("Go");
        break;
        default:
            console.log("Light is broken");
}

let day  = 7;

switch(day){
    case 1:
        console.log("sunday");
        break;
        case 2:
        console.log("monday");
        break;
        case 3:
        console.log("tuesday");
        break;
        case 4:
        console.log("wednessday");
        break;
        case 5:
        console.log("thusrday");
        break;
        case 6:
        console.log("friday");
        break;
        case 7:
        console.log("saturday");
        break;
        default:
            console.log("wrong day") 
}

alert("wrong");
console.error("this is error");
console.warn("warning message");

let theName = prompt("enter name");
console.log(theName);