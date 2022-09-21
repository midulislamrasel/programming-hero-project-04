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