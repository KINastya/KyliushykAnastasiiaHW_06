const init = () => {
    const number1 = prompt("Please write your firs number");
    const number2 = prompt("Please write your second number");
    const number3 = prompt("Please write your third number");
    const n1 = Number (number1);
    const n2 = Number (number2);
    const n3 = Number (number3);
if(isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    alert("This is not a nubmer. Please try again."); 
    return init();
}
alert(~~((n1 + n2 + n3)/3));
}
 init();