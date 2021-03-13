/*
Name: Andres Gaviria
Date: 24/02/2021

Purpose: Checking differents types of data types
*/

/*
*  This function will check the value of an input text

*
*
* */
function checkTextField(elem) {

    let flag = "none";
    if (elem.value.length < 1) {
    } else {
        flag = elem.value;
    }
    return flag;
}

/*
* Check textArea
*
*
* */
function checkTextArea(elem) {
    let flag;

    console.log(elem.value.length);
    //if the length value of the text field is blank - show error
    if (elem.value.length > 0) {
        // document.getElementById(elem.id+"Error").innerHTML = "You must enter your first and/or last name.";
        flag = elem.value;
        return flag;
    } else {
        return "none";
    }
}

/*
*  This function will checks input text is numeric and has a max length
* It changes the style of a corresponding error span based on return
*
*
* */
function checkNumeric(checkNumber, max) {
    let flag = "none";


    if (isNaN(checkNumber.value) || checkNumber.value.length < max) {

    } else {
        flag = checkNumber.value;
    }
    return flag;
}

/*
*  This function checks a Dropdown
*  making sure it has a value
*
* */
function checkdropDown(elem) {
    let flag;

    if (elem.value.length > 0) {

        flag = elem.value;
        return flag;
    } else {
        return "none";
    }

}

/*
*  This function checks a checkbox is checked
*
*
*
* */
function checkCheckBox(topping) {
    let flag = false;
    if (topping.checked === false) {

    } else {
        flag = true;
    }

    return flag;


}

function checkMyCheckBox(elem) {

    let flag = "";

    flag = "none";

    let checkArray = [];
    for (let i = 0; i < elem.length; i++) {

        if (elem[i].checked) {
            checkArray.push(elem[i].nextElementSibling.innerHTML);
            //flag += elem[i].nextElementSibling.innerHTML;
        }


    }
    if (checkArray.length == 0) {
        return "none";
    } else {
        console.log(checkArray.length);

        return checkArray;
    }
}



