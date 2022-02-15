// Helpers
function esPar(numerito) {
    return (numerito % 2 === 0);
  }
  
  function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }
  
  // Calculadora de mediana
  function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
  
    if (esPar(lista.length)) {
      const personitaMitad1 = lista[mitad - 1];
      const personitaMitad2 = lista[mitad];
  
      const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
      return mediana;
    } else {
      const personitaMitad = lista[mitad];
      return personitaMitad;
    }
  }
  
  // Mediana General
  const salariosCol = colombia.map(
    function (personita) {
      return personita.salary;
    }
  );
  
  const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
      return salaryA - salaryB;
    }
  );
  
  const medianaGeneralCol = medianaSalarios(salariosColSorted);
  
  // Mediana del top 10%
  const spliceStart = (salariosColSorted.length * 90) / 100;
  const spliceCount = salariosColSorted.length - spliceStart;
  
  const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
  );
  
  const medianaTop10Col = medianaSalarios(salariosColTop10);
  
  console.log({
    medianaGeneralCol,
    medianaTop10Col,
  });
  


// //helpers
// function isPair(num){
//     return(num % 2 === 0);   
// }

// function calculateMean(list){

//     const sumList = list.reduce(
//         function(accumulatedValue = 0, newElement){
//             return accumulatedValue + newElement;
//         }
//     );
//     const averageList = sumList / list.length;
//     return averageList;
// }
// const salaryCol = colombia.map (function(person){
//     return person.salary;
// }
// );

// const salaryWithSorted = salaryCol.sort(
//     function (salaryA, salaryB) {
//         return salaryA - salaryB;
//     }
// );

// function medianSalary(list){
//     const half = parseInt(list.length/2);
//     if(isPair(list.length)){
//         const personHalf1 = list[half -1];
//         const personHalf2 = list[half];

//         const mean = calculateMean([personHalf1, personHalf2]);
//         return mean
//     } else {
//         const personHalf = list[half];
//         return personHalf;
//     }
// }

// const medianCol = medianSalary(salaryWithSorted);

// //median top 10%

// const salaryColTop10 = salaryWithSorted.splice();

// console.log ( {
//     medianCol,
//     medianTop10Col,
// } 
// );