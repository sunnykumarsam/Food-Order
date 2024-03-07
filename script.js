function firstNameValidate() {
    var firstName = document.getElementById("name").value;
    var check = /^[a-zA-Z]{3,20}$/;
    if (check.test(firstName)) {

        document.getElementById("message").innerHTML = '';
    } else {
        document.getElementById("message").innerHTML = 'Enter your valid name';
        document.getElementById("message").style.color = 'red';
    }

}
function lastNamevalidate() {
    var lastName = document.getElementById("last").value;
    var check = /^[a-zA-Z]{3,20}$/;
    if (check.test(lastName)) {

        document.getElementById("mess").innerHTML = '';
    } else {
        document.getElementById("mess").innerHTML = 'Enter your valid name';
        document.getElementById("mess").style.color = 'red';
    }

}

// mobile validateEmail.............................................................................
function mobileValidate() {
    var mobileName = document.getElementById("mob_no").value;
    var check = /^[6789][0-9]{9}$/;
    if (check.test(mobileName)) {
      document.getElementById("mess").innerHTML = '';
    } else {
      document.getElementById("mess").innerHTML = 'Enter your valid number';
      document.getElementById("mess").style.color = 'red';
    }
  }

  

// function validate() {
//     // alert ("Please enter vaild number");
//     var phone = document.getElementById("number").value;
//     if (isNaN(phone)) {
//         // alert("please enter digits only ?")
//         document.getElementById("num").innerHTML = "Enter your valid Number";
//         document.getElementById("num").style.color = "red";
//     } else if (phone.length != 10) {
//         // alert("invalid mobile number ?")
//         document.getElementById("num").innerHTML = "Enter your valid Number";
//         document.getElementById("num").style.color = "red";

//     } else if (phone == " ") {
//         // confirm("hello your mobile number is "+" "+phone);
//         document.getElementById("num").innerHTML = "Enter your Number";
//         document.getElementById("num").style.color = "red";

//     } else {
//         document.getElementById("num").innerHTML = " ";

//     }


// }

function validateEmail() {
    var text = document.getElementById("email").value;
    var vaild = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9]+).([a-z]{2,8})(.[a-z]{2,8})$/;
    if (vaild.test(text)) {
        document.getElementById("span").innerHTML = " ";
        // alert(" Email valid ");
    }
    else {
        document.getElementById("span").innerHTML = "Enter your valid email";
        document.getElementById("span").style.color = "red";
    }
}
// validateEmail();


// let count = 0;
// function Add() {
//     count += 1;
//     document.getElementById("total").innerHTML = count;
//     // console.log(count);
// }
// function Minus() {
//     count -= 1;
//     document.getElementById("total").innerHTML = count;
// }

// const inputBox=document.querySelector(".inputBox");
// const inputfield=document.querySelector(".inputfield");
// const message=document.querySelector(".message");
// const submit=document.querySelector(".submit");

// let captchatext=null;

// const generatecaptcha=()=>{
//     const randomString=Math.random().toString(36).substring(2,7);
//     inputBox.innerHTML=randomString;
//     // console.log(randomString);
// }
// generatecaptcha();


// var value=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1',
// '2','3','4','5','6','7','8','9','0'];
// let allvalue=[''];
// for(let i= 0 ; i<6 ; i++){

// var cVal1=value[Math.floor(Math.random()*value.length)];
// allvalue=allvalue+cVal1;
// }
// console.log(allvalue)

// captcha.value=allvalue;
//  let random=document.getElementById("captcha").value;
//  random=allvalue;

// captchatext();
function cap() {
    var allvalue = '';
    // document.getElementById("captcha").value="sunnykumar";
    var value = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1',
        '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    for (var i = 0; i < 6; i++) {

        var cVal1 = value[Math.floor(Math.random() * value.length)];
        // var cVal2=value[Math.floor(Math.random()*value.length)];
        // var cVal3=value[Math.floor(Math.random()*value.length)];
        // var cVal4=value[Math.floor(Math.random()*value.length)];
        // var cVal5=value[Math.floor(Math.random()*value.length)];
        allvalue = allvalue + cVal1;
    }

    document.getElementById("captcha").value = allvalue;
}
function validCap() {
    var str1 = document.getElementById("captcha").value;
    var str2 = document.getElementById("textinput").value;
    // var store=true;
    if (str1 === str2) {
        // alert("yes");
        return true
    } else {
        document.getElementById("error").innerHTML = "Enter valid captcha";
        document.getElementById("error").style.color = "red";


        return false;
    }
    //    if(str1 != ""){
    //       if(str1 === str2){
    //         document.getElementById("erro").innerHTML="";
    //       return true;

    //     }
    //     else{
    //     //   alert("Please Enter a Valid Captcha");
    //     document.getElementById("error").innerHTML="Enter valid captcha";
    //       return false;
    //     }
    // }
    //     else{
    //       return false;
    //     }

    //  }
}
// function Add(){
    //     let text=document.getElementsById("text");
    //     let input=document.getElementById("quantity");
    //     let newEle=document.createElement('p');
    //     newEle.innerHTML=input.value;
//     text.appendChild(newEle);
//     input.value="";

// }
var selectedFoodItems = []; // Array to store selected food items

function searchAndAddFood() {
    var input = document.getElementById("food_item").value;
    if (input !== "") {
        if (!selectedFoodItems.includes(input)) {
            selectedFoodItems.push(input); // Add the food item to the selected items array

            var container = document.getElementById("selected_food_container");
            var foodDiv = document.createElement("div");
            var quantity = document.createElement("input");
            var incrementButton = document.createElement("button");
            var decrementButton = document.createElement("button");
            var deleteButton = document.createElement("button");
            
            quantity.type = "number";
            quantity.value = "1";
            quantity.min = "1";
            
            incrementButton.textContent = "+";
            incrementButton.onclick = function () {
                quantity.value = parseInt(quantity.value) + 1;
            };
            
            decrementButton.textContent = "-";
            decrementButton.onclick = function () {
                if (parseInt(quantity.value) > 1) {
                    quantity.value = parseInt(quantity.value) - 1;
                }
            };
            
            deleteButton.textContent = "Delete";
            deleteButton.className = "delete-button";
            deleteButton.onclick = function () {
                container.removeChild(foodDiv);
                var index = selectedFoodItems.indexOf(input);
                if (index !== -1) {
                    selectedFoodItems.splice(index, 1);
                }
            };
            
            foodDiv.className = "selected-food-item";
            foodDiv.innerHTML = input;
            foodDiv.appendChild(incrementButton);
            foodDiv.appendChild(quantity);
            foodDiv.appendChild(decrementButton);
            foodDiv.appendChild(deleteButton);
            container.appendChild(foodDiv);
            
            // Clear previous error message if exists
            var errorMessage = document.getElementById("error_message");
            if (errorMessage) {
                errorMessage.remove();
            }
        } else {
            // Show error message
            var errorMessage = document.getElementById("error_message");
            if (!errorMessage) {
                errorMessage = document.createElement("p");
                errorMessage.id = "error_message";
                errorMessage.textContent = "This food item is already added.";
                errorMessage.style.color = "red";
                var submitButtonContainer = document.getElementById("submit_button_container");
                submitButtonContainer.insertBefore(errorMessage, submitButtonContainer.firstChild);
            }
        }
    }
}
function formSubmittedSuccessfully() {
    if (validCap()) {
        // if(true){
        window.open("Thanks.html", "_blank"); // Open thanks.


    }

}