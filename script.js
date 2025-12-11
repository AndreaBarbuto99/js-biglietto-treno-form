const userName = document.getElementById("user-name");
const userKm = document.getElementById("user-km");
const userAge = document.getElementById("user-age");
const buttonS = document.getElementById("button-submit");
const buttonC = document.getElementById("button-cancel");
const nameDiv = document.getElementById("name-div");
const myForm = document.getElementById("myform");
const ticketType = document.getElementById("ticket-type");
const ticketPrice = document.getElementById("ticket-price");



buttonS.addEventListener("click", () => {
    if (!userName.value) return;
    else if (!userKm.value) return;
    else if (!userAge.value) return;
    nameDiv.innerHTML += `<div id="newName" class="fw-bold">${userName.value}</div>`;
    let myObj = calcTicket(userKm.value, userAge.value);
    ticketType.innerHTML = `<div>${myObj.name}</div>`;
    ticketPrice.innerHTML = `<div>${myObj.price}€</div>`;
    console.log(myObj);
})

buttonC.addEventListener("click", () => {
    userName.value = "";
    userKm.value = "";
    userAge.value ="default";
    cancAll();
})

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
})

function calcTicket(km, age)
{
    let price;
    let ticketName;
    let defaultPrice = 0.21 * parseInt(km);
    if (age === "minor") 
    {
        price = defaultPrice - defaultPrice * 20 / 100;
        ticketName = "Biglietto scontato minori";
    }
    else if (age === "old") 
    {
        price = defaultPrice - defaultPrice * 40 / 100;
        ticketName = "Biglietto scontato over 65";
        
    }
    else 
    {
        ticketName = "Biglietto normale";
        price = defaultPrice;
    }
    return {price: price.toFixed(2), name: ticketName};
}


function cancAll () {
    document.getElementById("newName").remove();
    ticketType.innerHTML = `<div></div>`;
    ticketPrice.innerHTML = `<div></div>`;


}