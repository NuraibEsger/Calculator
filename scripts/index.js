const num = parseInt(prompt("Enter a number between 10-99:"))

if (num >= 10 && num <= 99) {
    const digits = num.toString().split('');
  
    alert(digits.join(' '));
}
else {
    alert("Invalid input. Please enter a two-digit number between 10 and 99.");
}