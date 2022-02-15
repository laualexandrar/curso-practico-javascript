// const list1 = [
//     100,
//     200,
//     300,
//     500,
// ];

// let sumList1 = 0;
// for(var i = 0; i < list1.length; i++){
//     sumList1 = sumList1 + list1[i];
// }

// const averageList1 = sumList1 / list1.length;

function calculateMean(list){
    // let sumList = 0;
    //     for(var i = 0; i < list.length; i++){
    //         sumList = sumList + list[i];
    //     }
    const sumList = list.reduce(
        function(accumulatedValue = 0, newElement){
            return accumulatedValue + newElement;
        }// what we have done here, is to reduce an array into a value! 
    );
    const averageList = sumList / list.length;
    return averageList;
}

// function calculateMeanFromInput(){
//     const input = document.getElementById('array[]');
//     const value = input.value;

//     const mean = calculateMean(value);

//     const meanResult = document.getElementById("ResultMean");
//     meanResult.innerText=  "The mean of the list of numbers you provide is: " + mean;
    
// }

