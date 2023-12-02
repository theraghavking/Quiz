// function validateForm() {
//     var checkbox = document.getElementById("tick");
//     console.log("Checkbox value:", checkbox.checked);

//     if (!checkbox.checked) {
//         alert("Please check the checkbox to submit the quiz.");
//         return false;
//     }

//     return true;
// }

function validateForm() {
    var checkbox = document.getElementById("tick");
    var errorMessage = document.getElementById("error-message");

    if (!checkbox.checked) {
        errorMessage.innerHTML = "Please check the checkbox to submit the quiz.";
        return false;
    }

    errorMessage.innerHTML = "";  // Clear any previous error messages
    return true;
}


function showPopup() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function goBack() {
    // Add logic to handle going back
    alert("Going back");
}