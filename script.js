function calculate(){
      var num1 = parseFloat(document.getElementById("num1").value)
      var num2 = parseFloat(document.getElementById("num2").value)

      var op = document.getElementById("operation").value

      if(op === "+"){
        document.getElementById('result').value = num1+num2;
      }
      if(op === "-"){
        document.getElementById('result').value = num1-num2;
      }
      if(op === "*"){
        document.getElementById('result').value = num1*num2;
      }
      if(op === "/"){
        document.getElementById('result').value = num1/num2;
      }

}