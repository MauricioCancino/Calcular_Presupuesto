btnUno = document.querySelector("#btn1");
btnDos = document.querySelector ("#btn2");
valorUno = document.querySelector(".valor1");
valorDos = document.querySelector(".valor2");
valorTres = document.querySelector(".valor3");
valorUno.innerHTML = 0;
valorDos.innerHTML = 0;
valorTres.innerHTML = 0;

const arregloObjetos = [];

function addPresupuesto() {
    const presupuesto = parseInt (document.querySelector(".input1").value);
    return (valorUno.innerHTML = presupuesto);
}

function transformar() {
    const inputString = document.querySelector("#input2").value;
    const inputNumber = parseInt(document.querySelector("#input3").value);
    arregloObjetos.push({ string: inputString, number: inputNumber});
   
    inyectarTabla(arregloObjetos);
    gastoTotal();
    calcularResultadoFinal();
}

function deleteGasto(index) {
    arregloObjetos.splice(index,1)

    inyectarTabla(arregloObjetos);
    gastoTotal();
    calcularResultadoFinal();
}
function inyectarTabla(gastos) {
    const resultadoElement = document.getElementById("resultado");
    let contenidoHTML = "";
    gastos.forEach((objeto,index)=> {

        contenidoHTML += `
             <tr>
                 <td>${objeto.string}</td>
                 <td>${objeto.number} </td>
                 <td> <button class="btn btn-primary" onclick="deleteGasto(${index})">eliminar</button> </td>
             </tr>
         `;
    })
    resultadoElement.innerHTML=contenidoHTML;
}

function gastoTotal() {
    let total = 0;

    for (const objeto of arregloObjetos) {
        total+= parseInt(objeto.number);
    }

    valorDos.innerHTML = `${total}`;
}

function calcularResultadoFinal() {
    const presupuesto = parseInt(valorUno.innerHTML);
    const gastoTotal = parseInt(valorDos.innerHTML);
    const resultadoFinal = presupuesto - gastoTotal;
    valorTres.innerHTML = `${resultadoFinal}`;
}

btnUno.addEventListener ("click", addPresupuesto);
btnDos.addEventListener ("click", transformar);