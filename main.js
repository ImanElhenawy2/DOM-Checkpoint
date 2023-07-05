let totalPrice = document.getElementById('total');
let item1 = document.getElementById("item1");
let item1Name = document.getElementById("first");
let item2Name = document.getElementById("second");
let item3Name = document.getElementById("third");
let Count1 = document.getElementById("count1");
let Count2 = document.getElementById("count2");
let Count3 = document.getElementById("count3");
let myBtn = document.getElementById("btn");
let myBtn1 = document.getElementById("btn1");
let myBtn2 = document.getElementById("btn2");
let myBtn3 = document.getElementById("btn3");
let myBtn4 = document.getElementById("btn4");
let myBtn5 = document.getElementById("btn5");
let myRemovBtns = document.getElementsByClassName("delete");


// get delete button
for (let i = 0; i < myRemovBtns.length; i++) {
    myRemovBtns.item(i).addEventListener("click", function() {
        document.querySelector(`#item${i + 1}`).remove()
    })
}

// get totalPrice

function TotalPrice(item1, item2, item3){
    return item1 + item2 + item3;
    
}
const prices= {
    item1: 35,
    item2: 34,
    item3: 21,
}
const state ={
    quantities:{
        item1: 1,
        item2: 1,
        item3: 1,
    },
    totalPrice: 90 ,
};

// DRY - DONT REPEAT YOURSELF

var result = TotalPrice(35, 34, 21);
totalPrice.innerHTML = result;

// function increseQuantityItem(){
//     state.quantities.item1++;
// }
// Count1.addEventListener("click", function (e){
//     1 + increseQuantityItem();
//     Count1.innerHTML =  state.quantities.item1;
// })

// get increment / decrement button
var a = 0;

myBtn.addEventListener("click", function increment(e){
    a++;
    Count1.innerText = a;
});
myBtn1.addEventListener("click", function decrement(e){
    if (a > 0){
        a--;
        Count1.innerText = a; 
    }
});
myBtn2.addEventListener("click", function increment(e){
    a++;
    Count2.innerText = a;
});
myBtn3.addEventListener("click", function decrement(e){
    if (a > 0){
        a--;
        Count2.innerText = a; 
    }
});
myBtn4.addEventListener("click", function increment(e){
    a++;
    Count3.innerText = a;
});
myBtn5.addEventListener("click", function decrement(e){
    if (a > 0){
        a--;
        Count3.innerText = a; 
    }
});



