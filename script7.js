const suma = function () {
    let number1=parseInt( document.getElementById("numero1").value)
                +parseInt(document.getElementById("numero1").value);
    console.log("funcionando suma:"+number1)
    return  number1

}
const resta  = function (num1, num2) {
    return num1-num2
}
const mutliplicacion = function (num1, num2) {
    return num1*num2
}
const division = function (num1, num2) {
    return num1/num2
}
