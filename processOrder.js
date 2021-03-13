/*
Name: Andres Gaviria
Date: 24/02/2021

Purpose: Getting boolean values of some variables ,calculating the price of the ice cream and prompting messages in the  output <p>
*/

// this adds an listener to the window object - when the window is loaded and ready attach the validation function
// this line could also have been written like this
// window.onload = validation;

window.addEventListener("load", init, false);
/*All this variables will prompt True (if i write something in them)*/
let fName;
let lName;
let phone;
let qty;

let container;
let address;
let glass;
let cone;
let conMilk;
let chocoSauce;
let checkingToppings;

/*
*
* */
function init() {

    /*if i click the submit button it will run the output function*/
    document.getElementById("submitButton").addEventListener("click", output);  /* when the user click the submit button it will run the output function*/
    document.getElementById("resetButton").addEventListener("click", resetFuntionality);  /* when the user click the reset button it will run the resetFuntionality function*/


} // end init function

/*
*  This function will validate form input
* The form is valid when the following is true:
* first and last name fields are completed
* phone number is a number and has at least 10 digits
* User has written his address
* User has selected the quantity(number of ice cream balls)
* user has selected the flavor
* User has selected one of the  toppings(nuts or chocochips or raisins or fruits or coockes)
* User has selected one  of  the containers(glass or cone)
* User has selected one of the ice cream sauces (condensed milk or chocolate sauce)
*@return boolean
*
* */
function checkMyForm() {


    fName = checkTextField(document.getElementById("firstName"));


    lName = checkTextField(document.getElementById("lastName"));
    phone = checkNumeric(document.getElementById("phone"), 10);
    address = checkTextArea(document.getElementById("address"));
    qty = checkdropDown(document.getElementById("itemQuantity"));
    checkingToppings = checkMyCheckBox(document.getElementsByName("topping"))
    container = checkMyCheckBox(document.getElementsByName("container"))


    cone = checkCheckBox(document.getElementById("cone"));

    glass = checkCheckBox(document.getElementById("glass"));
    conMilk = checkCheckBox(document.getElementById("condensedMilk"));
    chocoSauce = checkCheckBox(document.getElementById("chocolateSauce"));

}// end checkMyForm()


/*
*  This function is main calculate function used to
*  calculate total with shipping and widget cost
*  making sure it has a value
* Changes borderColor to red when this is false
*
* */
function calculateTotal() {
    let ballsPrice;
    let containerPrice;
    /* if the user does not selected either (quantity) *qty* or one of the container the price cannot be calculated*/
    if (qty === "none" || container === "none") {

        document.getElementById("totalCost").innerHTML = "totalCost: None";
    } else {
        /* the price depends of the number of balls selected*/
        switch (Number((document.getElementById("itemQuantity")).value)) {
            case 1:
                ballsPrice = 5;

                break;
            case 2:
                ballsPrice = 10;
                break;
            case 3:
                ballsPrice = 15;
                break;
            default:
        }
        /* the price also depends of the type of container  selected*/
        if (container[0] === "Cone($5.00)") {
            containerPrice = 5;
        } else if (container[0] === "Glass(10.00)") {
            containerPrice = 10;
        }
        /*displaying the price in the paragraph within id "totalCost"*/
        document.getElementById("totalCost").innerHTML = "Total:  $" + (containerPrice + ballsPrice);
    }


} // end calculateTotal function

function output() {

    /*run the checkmyForm function to determine which texts were typed and which boxes were checked*/
    checkMyForm(); /*checking what the user entered first*/

    /*Typing Receipt in the paragraph with id "titleOutput"*/
    document.getElementById("titleOutput").innerHTML = "Receipt:";


    document.getElementById("firstNameOutput").innerHTML = "First name: " + fName;
    document.getElementById("lastNameOutput").innerHTML = "Last name: " + lName;
    document.getElementById("toppingsOutput").innerHTML = "Toppings : " + checkingToppings;
    document.getElementById("phoneOutput").innerHTML = "Phone : " + phone;
    document.getElementById("addressOutput").innerHTML = "Address: " + address;
    document.getElementById("itemQuantityOutput").innerHTML = "Number of balls: " + qty;

    if (((document.getElementById("itemFlavor")).value) == 0) {
        document.getElementById("itemFlavorOutput").innerHTML = "Flavor : none";
    } else {

        document.getElementById("itemFlavorOutput").innerHTML = "Flavor:" + document.getElementById("itemFlavor").options[document.getElementById("itemFlavor").selectedIndex].text
    }


    document.getElementById("containerOutput").innerHTML = "Container: " + container;
    document.getElementById("containerOutput").innerHTML = "Container: " + container;


    calculateTotal();  /*calculating the total*/
}

function resetFuntionality() {   /*when the user click the reset button the receipt will disappear*/


    let outputDivP = document.getElementById("outputDiv");
    let counter = outputDivP.querySelectorAll('p'); //Getting all the 'P' from the outputDiv
    console.log(counter.length);
    for (let i = 0; i < counter.length; i++) {
        counter[i].innerHTML = ""; //all the 'p' will be a empty String
    }
}

