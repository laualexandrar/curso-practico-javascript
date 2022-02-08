function calculateMean(list){
    const sumList = list.reduce(
        function(accumulatedValue = 0, newElement){
            return accumulatedValue + newElement;
        }
    );
    const averageList = sumList / list.length;
    return averageList;
}

// const list1 = [
//     100,
//     200,
//     500,
//     400000000,
// ];

function calculateMedian(list1){
    list1.sort(function(a,b){
        return a - b;
    });
    const halfList1 = parseInt(list1.length/2);
    function isItPair (num){
        if(num % 2 === 0){
            return true;
        } else {
            return false
        }
    }
    let median;
    if(isItPair(list1.length)){
        const element1 = list1[halfList1 - 1];
        const element2= list1[halfList1];
    
        const averageElement1And2 = calculateMean([
            element1, 
            element2
        ]);
        return median = averageElement1And2;
    
    } else {
       return median = list1[halfList1];//la posicion de la mitad de la lista
    }
}


