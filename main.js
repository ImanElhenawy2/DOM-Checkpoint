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




// get totalPrice
const prices= {
    item1: 35,
    item2: 34,
    item3: 21,
}
const state ={
    quantities:{
        item1: 0,
        item2: 0,
        item3: 0,
    },
    totalPrice: 90 ,
};



function TotalPrice(){
    totalPrice.innerHTML = prices.item1 * state.quantities.item1 + prices.item2 * state.quantities.item2 + prices.item3 * state.quantities.item3;
    
}
TotalPrice();



// get increment / decrement button

myBtn.addEventListener("click", function increment(e){
    state.quantities.item1++;
    TotalPrice();
    Count1.innerText = state.quantities.item1;
});
myBtn1.addEventListener("click", function decrement(e){
    if (state.quantities.item1> 0){
        state.quantities.item1--;
        Count1.innerText = state.quantities.item1; 
        TotalPrice();
    }
});
myBtn2.addEventListener("click", function increment(e){
    state.quantities.item2++;
    Count2.innerText = state.quantities.item2;
    TotalPrice();
});
myBtn3.addEventListener("click", function decrement(e){
    if (state.quantities.item2 > 0){
        state.quantities.item2--;
        Count2.innerText = state.quantities.item2; 
        TotalPrice();
    }
});
myBtn4.addEventListener("click", function increment(e){
    state.quantities.item3++;
    Count3.innerText = state.quantities.item3;
    TotalPrice();
});
myBtn5.addEventListener("click", function decrement(e){
    if (state.quantities.item3 > 0){
        state.quantities.item3--;
        Count3.innerText = state.quantities.item3; 
        TotalPrice();
    }
});

// get delete button
for (let i = 0; i < myRemovBtns.length; i++) {
    myRemovBtns.item(i).addEventListener("click", function() {
        document.querySelector(`#item${i + 1}`).remove()
        state.quantities[`item${i + 1}`] = 0
        TotalPrice()
    })
}

