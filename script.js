// login button functionality 
document.getElementById("loginButton").addEventListener("click", function (e) {
    e.preventDefault();
    //Assigned Credientials 
    const mobileNumber = 200230052;
    const pinNumber = 1234;

    //Call by Id get the value and convert the string into number
    const mobileNumberValue = document.getElementById("mobile-number").value;
    const mobileNumberValueConverted = parseInt(mobileNumberValue);
    const pinNumberValue = document.getElementById("pin-number").value;
    const pinNumberValueConverted = parseInt(pinNumberValue);

    // checks if the Credential is correct or not for both, if both are true then go to the next page. if not then alert not matched 
    if (mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber) {
        window.location.href = "./home.html"
    } else {
        alert("not matched")
    }
})