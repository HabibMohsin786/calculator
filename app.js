function displayInp(inPut) {
    document.getElementById('display').value += inPut;
}
function screenClr(clr) {
    document.getElementById('display').value = '';
}
function calculate() {
    var display = document.getElementById('display').value;
    document.getElementById('display').value = eval(display);
}
function backSpc() {
    var rvm = document.getElementById('display').value;
    document.getElementById('display').value = document.getElementById('display').value.slice(0, -1);
    console.log(rvm);
}

