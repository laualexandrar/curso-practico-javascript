// const originalPrice = 120;
// const discount = 18;
// const percentagePriceWithDiscount =  100 - discount;
// const priceWithDiscount = (originalPrice * percentagePriceWithDiscount) / 100;
// console.log({
//     originalPrice,
//     discount,
//     percentagePriceWithDiscount,
//     priceWithDiscount
// });

function calculatePriceWithDiscount(price, discount){
    const percentagePriceWithDiscount =  100 - discount;
    const priceWithDiscount = (price * percentagePriceWithDiscount) / 100;
    return  priceWithDiscount;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const priceWithDiscount = calculatePriceWithDiscount(priceValue, discountValue);

    const resultP = document.getElementById("ResultPrice");
    resultP.innerText = "The price with the discount is: $" + priceWithDiscount;
}


