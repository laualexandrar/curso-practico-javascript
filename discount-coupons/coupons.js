// const coupons = [
//     "Happy_Birthday",
//     "Thanks_For_Coming_again",
//     "Bring_a_Date",
//     "San_Valentines-day"
//     ];

//     function calculatePriceWithDiscount(price, discount){
//         const percentagePriceWithDiscount =  100 - discount;
//         const priceWithDiscount = (price * percentagePriceWithDiscount) / 100;
//         return  priceWithDiscount;
//     }
    
//     function onClickButtonPriceDiscount(){
//         const inputPrice = document.getElementById("InputPrice");
//         const priceValue = inputPrice.value;
    
//         const inputCoupon = document.getElementById("InputCoupon");
//         const couponValue = inputCoupon.value;
    
//         let myDiscount; 
//         switch(couponValue){
//             case coupons[0]:
//                myDiscount = 20;
//                 break;
//             case coupons[1]:
//                 myDiscount = 15;
//                 break;
//             case coupons[2]:
//                 myDiscount = 18;
//                 break;
//             case coupons[3]: 
//                 myDiscount= 50;
//                 break;
//         }

//         const priceWithDiscount = calculatePriceWithDiscount(priceValue, myDiscount);
    
//         const resultP = document.getElementById("ResultPrice");
//         resultP.innerText = "The price with the coupon is: $" + priceWithDiscount;
//     }

    // Solution number 2

    // const coupons = [
    //     "Happy_Birthday",
    //     "Thanks_For_Coming_again",
    //     "Bring_a_Date",
    //     "San_Valentines-day"
    //     ];

    //     function calculatePriceWithDiscount(price, discount){
    //         const percentagePriceWithDiscount =  100 - discount;
    //         const priceWithDiscount = (price * percentagePriceWithDiscount) / 100;
    //         return  priceWithDiscount;
    //     }

    // function onClickButtonPriceDiscount(){
    //     const inputPrice = document.getElementById("InputPrice");
    //     const priceValue = inputPrice.value;
    
    //     const inputCoupon = document.getElementById("InputCoupon");
    //     const couponValue = inputCoupon.value;
    
    //    if(!coupons.includes(couponValue)){
    //        alert("The coupon " + couponValue + "Is not valid");
    //    } else if(couponValue === "Happy_Birthday") {
    //        discount =  20;
    //    } else if (couponValue === "Thanks_For_Coming_again") {
    //        discount = 15;
    //    } else if( couponValue === "Bring_a_Date") {
    //        discount = 18;
    //    } else if (couponValue === "San_Valentines-day") {
    //        discount = 50;
    //    }

    //     const priceWithDiscount = calculatePriceWithDiscount(priceValue, discount);
    
    //     const resultP = document.getElementById("ResultPrice");
    //     resultP.innerText = "The price with the coupon is: $" + priceWithDiscount;
    // }

// Solution number 3
const coupons = [
    {
        name:"Happy_Birthday",
        discount: 20,
    },
    {
        name:"Thanks_For_Coming_again",
        discount: 15,
    },
    {
        name: "Bring_a_Date",
        discount: 18,
    },
    {
        name: "San_Valentines-day",
        discount: 50,
    },
    ];

    function calculatePriceWithDiscount(price, discount){
        const percentagePriceWithDiscount =  100 - discount;
        const priceWithDiscount = (price * percentagePriceWithDiscount) / 100;
        return  priceWithDiscount;
    }

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    const isCouponValueValid = function(coupon) {
        return coupon.name === couponValue;
    }
    const userCoupon = coupons.find(isCouponValueValid);

    if(!userCoupon){
        alert("The coupon " + couponValue + " Is not valid");
    } else {
        const discount = userCoupon.discount;
        const priceWithDiscount = calculatePriceWithDiscount(priceValue, discount);

        const resultP = document.getElementById("ResultPrice");
        resultP.innerText = "The price with the coupon is: $" + priceWithDiscount;
    }
}