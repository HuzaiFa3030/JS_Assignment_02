// Question No: 01

function adding(e) {
    return function (val) {
        return e + val;
    }
}
let add = adding(5);

console.log(add(15));








// Question No: 02

let array = [1, 2, 3, 4, 5, 6, 7];
function searchingArray(array, val) {
    if (array.length === 0) {
        return console.log(false);
    }
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (Array.isArray(element)) {
            if (searchArray(element, val)) {
                return console.log(true);
            }
        } else {
            if (element === val) {
                return console.log(true);
            }
        }
    }
    return console.log(false);
}

searchingArray(array, 3);







// Question No: 03

let Paragraph = document.getElementById("paragraph");
function addintoParagraph(val) {
    const para = document.createElement("p");
    para.innerHTML = val;
    Paragraph.appendChild(para);
}

addintoParagraph("Hello world 1");
addintoParagraph("Hello world 2");
addintoParagraph("Hello world 3");
addintoParagraph("Hello world 4");






// Question No: 04

let unOrderList = document.getElementById("list-item-add");
function addInToUl(val) {
    const list = document.createElement("li");
    list.innerHTML = val;
    unOrderList.appendChild(list);
}

addInToUl("Hello world 1");
addInToUl("Hello world 2");
addInToUl("Hello world 3");
addInToUl("Hello world 4");
addInToUl("Hello world 5");
addInToUl("Hello world 6");






// Question No: 05

function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
}
const myElement = document.getElementById("heading-first");
changeBackgroundColor(myElement, "black");


function changeTextColor(element, color) {
    element.style.color = color;
}
const my_Element = document.getElementById("heading-first");
changeTextColor(myElement, "white");





// Question No: 06

function saveObjectToLocalStorage(e, obj) {
    let objtString = JSON.stringify(obj);
    localStorage.setItem(e, objtString);
}

let Obj = { name: "Muhammad Huzaifa", age: 22, rollNo: 40, email: 'muhammadhuzaifa3030@gmail.com' };
saveObjectToLocalStorage("userInfo", Obj);






// Question No: 07

function getObject(e) {
    const objString = localStorage.getItem(e);
    const obj = JSON.parse(objString)
    console.log('Data', obj)
}

getObject('userInfo')






// Question No: 08

function saveObject(e) {
    for (let key in e) {
        localStorage.setItem(key, JSON.stringify(e[key]));
    }

    const newObject = {};

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const val = JSON.parse(localStorage.getItem(key));
        newObject[key] = val;
    }

    return newObject;
}
const myObj = { name: "Muhammad Huzaifa", age: 22, rollNo: 40, email: 'muhammadhuzaifa3030@gmail.com' };
const newObj = saveObject(myObj);
console.log(newObj);
