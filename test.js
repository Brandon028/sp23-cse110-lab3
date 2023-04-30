function sumValues(num1, num2, add) {
    if (add) {
        const result = 0;
        result = num1 + num2;
        console.log('line 9: ', result);
    } else return;
    //console.log('line 13: ', result);
}

function discountPrices(prices, discount){
    const discounted = [5,5,5];
    const length = prices.length;

    for (let i = 0; i < length; i++) {
        const discountedPrice = prices[i] * (1-discount);
        //finalPrice = Math.round(discountedPrice * 100) / 100;
        //discounted.push(discountedPrice);
        discounted[i]=0;
        //console.log(discounted);
    }


    //console.log('q1: ', length);
    //console.log('q2: ', discountedPrice);
    //console.log('q3: ', finalPrice);
    
    return discounted;
}

let student = {
    name: 'Sarah',
    major: 'Computer Science',
    'Grad Year': '2022',
    greeting: function() {console.log('Hello!'); },
    'Favorite Teacher': {
        name: 'Thomas Powell',
        course: 'CSE 110'
    },
    courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
};

function modifyArray(array, callback){
    //console.log(callback);
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(callback(array[i]));
    }
    return newArr;
}

function doSomething(num) {
    return num * 2;
}

modifyArray([1,2,3], doSomething);

let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (const key in statistics) {
    if ((key.charAt(0) === 'r') || (statistics[key] % 2)){
        //console.log(statistics[key]);
    }
}


/*
function pt(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(pt, 1000);
*/
console.log('start');
function printNums() {
    console.log(1);
    setTimeout(function() { console.log(2);}, 1000);
    setTimeout(function() { console.log(3);}, 0);
    console.log(4);
}
printNums();

//document.write("got: ")
//document.write(modifyArray([1,2,3], doSomething))


