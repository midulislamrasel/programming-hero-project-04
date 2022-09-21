//  0.1: convert radian to degree..

function radianToDegree(radians) {
    let chekUnDefined = typeof radians;
    if (chekUnDefined === "undefined") {
        return "Please Enter a Valid Input";
    } else {
        const pi = Math.PI;
        const asToDe = radians * (180 / pi);
        const toC = asToDe.toFixed(2);

        return toC;

    }
}

console.log(radianToDegree(230));




//---- 0.2: Check whether the given file name is a javascript file or not--

function isJavaScriptFile(jsFile) {
    let chekUnDefined = typeof jsFile;
    if (chekUnDefined === "undefined") {
        return "Please Enter a Valid Input";
    } else {
        const fileName1 = 'zabu.js';
        const fileName2 = 'jarbu.pdf';
        const fileName3 = 'jabur.png';

        if (jsFile === fileName1) {
            return true;

        }
        else if (jsFile === fileName2) {
            return false;
        }
        else if (jsFile === fileName3) {
            return false;
        }
        else {
            return false;
        }
    }
}
console.log(isJavaScriptFile('zabu.js'));



//---- 0.3: Calculate the total oil price that I have pay.

function oilPrice(diesel,
    petrol, octane) {
    const perDiesel = 114;
    const perPetrol = 130;
    const perOctan = 135;

    const diselOil = diesel * perDiesel;
    const petrolOil = petrol * perPetrol;
    const octanOil = octane * perOctan;

    const totalOil = diselOil + petrolOil + octanOil;

    return totalOil;
}


const totalOil = oilPrice(5, 3, 6);
console.log(totalOil);



// 0.4: publicBusFare

function publicBusFare(totalPeople) {
    let chekUnDefined = typeof totalPeople;
    if (chekUnDefined === "undefined") {
        return "Please Enter a Valid Input";
    } else {
        let publicBusCost = 0;
        let tPeople = totalPeople;
        if (tPeople >= 50) {
            tPeople = tPeople % 50;
        }

        if (tPeople >= 11) {
            tPeople = tPeople % 11;
        }

        if (tPeople < 11) {
            publicBusCost = tPeople * 250;
        }

        return publicBusCost;
    }
}

console.log(publicBusFare(117));

// 0.5: isBestFriend

const bestFriend = [

    { name: 'zabu', friend: 'habu' },
    { name: 'habu', friend: 'zabu' }
];

function isBestFriend(bestFriend) {

    let best1 = bestFriend[0];
    let best2 = bestFriend[1];

    if (best1.name === best2.friend) {
        return true
    }
    else {
        return false;
    }

}

const closeFriend = isBestFriend(bestFriend);
console.log(closeFriend);

