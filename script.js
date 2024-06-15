const pantalla = document.getElementById('pantalla');
const encendido= document.getElementById('radio');

function agregar(valor){
   if(encendida){
      pantalla.value += valor;
      guardado.push(valor);
   }else{
      let mensaje='Calculadora apagada!';
      pantalla.value = mensaje;
   }
  
}

function calcular(){
   let valorPantalla = pantalla.value;
   let resultado= eval(valorPantalla);
   pantalla.value = resultado;
}

function borrar(){
   pantalla.value = '';
}
let encendida=false;
function prender(){
   encendida=!encendida;
   if(encendida){
      encendido.style.color='green';
      pantalla.value = '';
   }else {
      encendido.style.color='red';
      pantalla.value = '';
   } 
   return encendida;
}
function borrarUltimo(){
   pantalla.value= pantalla.value.slice(0,-1);
}

function calcularPorcentaje() {
   
       let pantalla = document.getElementById('pantalla');
       let expresion = pantalla.value;
       let porcentajeRegex = /(\d+(\.\d+)?)%/g;
       let match;
       
       let operadores = expresion.split(/[\d\.]+/).filter(Boolean);
       let operandos = expresion.split(/[\+\-\*\/]/).map(parseFloat);
       
       if (operandos.length > 1) {
           let ultimoOperador = operadores[operadores.length - 1];
           let base = operandos[operandos.length - 2];
           let porcentaje = operandos[operandos.length - 1] / 100;
           
           switch (ultimoOperador) {
               case '+':
                   pantalla.value = base + (base * porcentaje);
                   break;
               case '-':
                   pantalla.value = base - (base * porcentaje);
                   break;
               case '*':
                   pantalla.value = base * porcentaje;
                   break;
               case '/':
                   pantalla.value = base / porcentaje;
                   break;
           }
       } else {
           
           while ((match = porcentajeRegex.exec(expresion)) !== null) {
               let valor = parseFloat(match[1]);
               let porcentaje = valor / 100;
               expresion = expresion.replace(match[0], porcentaje);
           }
           pantalla.value = expresion;
       }
   
}
