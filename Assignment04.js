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