function add() {
    // Get user inputs
    //var num1 = parseFloat(document.getElementById('num1').value);
    //var num2 = parseFloat(document.getElementById('num2').value);
    var num1 = prompt("Enter Number 1: ");
    var num2 = prompt("Enter Number 2: ");
    var result = parseFloat(num1) + parseFloat(num2);

    document.getElementById('h2id').innerHTML = result;

    // Check if inputs are valid numbers
    //if (isNaN(num1) || isNaN(num2)) {
    //    alert("Please enter valid numbers.");
    //    return;
    }

    // Add the two numbers
    //var sum = num1 + num2;

    // Display the result in the h2 container
    //document.getElementById('result').innerText = sum;

