"use strict"

// function renderCoffee(coffee) {
//     var html = '<tr class="coffee">';
//     html += '<td>' + coffee.id + '</td>';
//     html += '<td>' + coffee.name + '</td>';
//     html += '<td>' + coffee.roast + '</td>';
//     html += '</tr>';
//
//     return html;
// }
//
// function renderCoffees(coffees) {
//     var html = '';
//     for(var i = coffees.length - 1; i >= 0; i--) {
//         html += renderCoffee(coffees[i]);
//     }
//     return html;
// }
//
// function updateCoffees(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     var selectedRoast = roastSelection.value;
//     var filteredCoffees = [];
//     coffees.forEach(function(coffee) {
//         if (coffee.roast === selectedRoast) {
//             filteredCoffees.push(coffee);
//         }
//     });
//     tbody.innerHTML = renderCoffees(filteredCoffees);
// }

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

// var tbody = document.querySelector('#coffees');
// var submitButton = document.querySelector('#submit');
// var roastSelection = document.querySelector('#roast-selection');
//
// tbody.innerHTML = renderCoffees(coffees);
//
// submitButton.addEventListener('click', updateCoffees);

const coffeeMenu = document.getElementById("coffeeDisplay");
const coffeeSelector = document.getElementById("coffeetypes");
coffeeSelector.addEventListener("change", clickMe);

function clickMe(){
    coffeeMenu.innerHTML = "";
    let stringie = "";
    let selectType = coffeeSelector.options[coffeeSelector.selectedIndex].value;
    console.log(`The selected roast type is ${selectType}`);
    for(let i=0; i< coffees.length; i++){
        let roastString = coffees[i].roast
        if(  roastString.includes(selectType)){
            stringie += "<div class=\"col-6   \">" + coffees[i].name + " <i>" + coffees[i].roast  +  "</i>"  +      "</div>" ;
        }
    }
    coffeeMenu.innerHTML = stringie;

}

const inputter = document.getElementById("inputBox");
inputter.addEventListener("input", getSpecificNames);

function getSpecificNames(e){
    let eText = e.target.value;
    coffeeMenu.innerHTML = "";
    resetIt();
    let stringie = "";
    for(let i=0; i< coffees.length; i++){
        let roastString = coffees[i].name
        if(  roastString.toLowerCase().includes(eText.toLowerCase())){
            stringie += "<div class=\"col-6    \">" + coffees[i].name + " <i>" + coffees[i].roast  +  "</i>"  +      "</div>" ;
        }

    }
    coffeeMenu.innerHTML = stringie;
}

//ADD COFFEE
const formElem = document.getElementById("formCoffee3");
formElem.addEventListener('submit', addCoffee);


function addCoffee(){
    event.preventDefault();
    coffees.push({id:coffees.length, name:formElem.newCoffee.value, roast:formElem.coffeetypes2.value});
    let stringie = "";
    for(let i=0; i< coffees.length; i++){
        stringie += "<div class=\"col-6    \">" + coffees[i].name + " <i>" + coffees[i].roast  +  "</i>"  +      "</div>" ;
    }
    coffeeMenu.innerHTML = stringie;

}



function resetIt(){
    coffeeSelector.removeEventListener("change", clickMe);
    coffeeSelector.addEventListener("change", clickMe);
    coffeeSelector.selectedIndex = 0;
    coffeeMenu.innerHTML = "";


}

function getNames(arr, typeName){
    let stringie = "";
    for(let i=0; i< arr.length; i++){

        stringie += "<div class=\"col-6  \">" + coffees[i].name + " <i>" + coffees[i].roast  +  "</i>"  +      "</div>" ;
    }
    return stringie;
}
let input2 = document.getElementById("input2");
input2.addEventListener("input", changer2);
function changer2() {
    document.getElementById("coffeeDisplay").innerHTML = input2.value;
}



