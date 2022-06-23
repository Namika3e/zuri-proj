alert('Enter 1 for addition')
alert('Enter 2 for subtraction')
alert('Enter 3 for multiplication')
alert('Enter 4 for division')
alert('Enter 5 to quit calculator')



function calc() {
    let num1 = 0, num2 = 0;
    const input = prompt('What operation would you like to perform?');

    if (input === '1') {
        num1 = prompt('Enter first number');
        num2 = prompt('Enter second number');
        alert(parseInt(num1) + parseInt(num2));
        }
        else if (input === '2') {
            num1 = prompt('Enter first number');
            num2 = prompt('Enter second number');
            alert(num1 - num2);
        }
        else if (input === '3') {
            num1 = prompt('Enter first number');
            num2 = prompt('Enter second number');
            alert(num1 * num2);
        }
        else if (input === '4') {
            num1 = prompt('Enter first number');
            num2 = prompt('Enter second number');
            alert(num1 / num2);
        }
        else if (input === '5') {
            return;
        }
        else {
            alert('invalid input, try again?');
            calc();
            
        }

}

calc();