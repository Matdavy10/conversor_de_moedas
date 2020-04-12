

function converter (btn) {
   var salario = document.getElementById("txtConversorReal").value
   var salarioeur = Number(salario / 5.69)
   var salariodol = Number(salario / 5.22) 
      
   document.getElementById("conversaoreal").textContent = `seu salario em real é ${salario}, em euro é, ${salarioeur.toFixed(2)} e em doláres é, ${salariodol.toFixed(2)}`
}
function converterdol (btnDol){
  var salariodol = document.getElementById("txtConversorDol").value
  var salarioeur = Number(salariodol / 1.09 )
  var salarioreal = Number(salariodol * 5.22)
  document.getElementById("conversaodol").textContent = (`seu salario em dolar é ${salariodol}, em euro é, ${salarioeur.toFixed(2)} e em reais é, ${salarioreal.toFixed(2)} `)
}
function convertereur (btnEur){
  var salarioeur = document.getElementById("txtConversorEur").value
  var salariodol = Number(salarioeur * 1.09)
  var salarioreal = Number(salarioeur * 5.69)
  document.getElementById("conversaoeur").textContent = `seu salario em euro é ${salarioeur}, em dolar é, ${salariodol.toFixed(2)} e em reais é, ${salarioreal.toFixed(2)} `
}
function limparReal (btnLimpar){
  document.getElementById("txtConversorReal").textContent = ""
  document.getElementById("conversaoreal").textContent = ""
 
  
}
function limparDolar (btnLimpar){
  document.getElementById("conversaodol").textContent = ""


}
function limparEuro (btnLimpar){
  document.getElementById("conversaoeur").textContent= ""
}
