// eslint-disable-next-line
function greet() {

    // get the inputs by
    var firstNameInput = document.getElementById('first-name');
    var lastNameInput = document.getElementById('last-name');
    
    // get the values out of input
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;
    
    console.log(firstName, lastName);

    // make the string of the greeting
    var greeting = 'Hello ' + firstName + ' ' + lastName + '!';
    console.log(greeting);

    // display greeting

    // remove prompt

}

// TODO: validate name inputs
// TODO: clear inputs after greet?