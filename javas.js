function formValidation(event){
    event.preventDefault();

    let isValid = true;

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let tel = document.getElementById('tel').value;
    let address = document.getElementById('address').value;
    let service = document.getElementById('service').value;
    let quantity = document.getElementById('quantity').value;
    let payment = document.getElementsByName('payment');
    let agree = document.getElementById('agree');

    document.getElementById('nameError').innerHTML = "";
    document.getElementById('emailError').innerHTML = "";
    document.getElementById('telError').innerHTML = "";
    document.getElementById('addressError').innerHTML = "";
    document.getElementById('serviceError').innerHTML = "";
    document.getElementById('paymentError').innerHTML = "";
    document.getElementById('quantityError').innerHTML = "";
    document.getElementById('agreeError').innerHTML = "";

    if(name.trim() == ""){
        document.getElementById('nameError').innerHTML = "Full name cannot be empty!";
        isValid = false;
    }

    if(email.trim() == ""){
        document.getElementById('emailError').innerHTML = "Email cannot be empty!";
        isValid = false;
    }
    else if(email.indexOf('@') === -1 || email.indexOf('.') === -1){
        document.getElementById('emailError').innerHTML = "Email must contain @ and .";
        isValid = false;
    }

    if(tel.trim() == ""){
        document.getElementById('telError').innerHTML = "Phone number cannot be empty!";
        isValid = false;
    }

    if(address.trim() == ""){
        document.getElementById('addressError').innerHTML = "Address cannot be empty!";
        isValid = false;
    }

    if(service == ""){
        document.getElementById('serviceError').innerHTML = "Please select a service!";
        isValid = false;
    }

    let selected = "";

    for(let i = 0; i < payment.length; i++){
        if(payment[i].checked){
            selected = payment[i].value;
            break;
        }
    }

    if(selected == ""){
        document.getElementById('paymentError').innerHTML = "Please select payment method!";
        isValid = false;
    }

    if(quantity.trim() == ""){
        document.getElementById('quantityError').innerHTML = "Quantity cannot be empty!";
        isValid = false;
    }
    else if(quantity <= 0){
        document.getElementById('quantityError').innerHTML = "Quantity must be more than 0!";
        isValid = false;
    }

    if(!agree.checked){
        document.getElementById('agreeError').innerHTML = "You must agree to the terms!";
        isValid = false;
    }

    if(isValid){
        alert("Order submitted successfully!");
        event.target.reset();
    }
}