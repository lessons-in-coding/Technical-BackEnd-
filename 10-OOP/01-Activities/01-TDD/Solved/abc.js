function abc(xyz){
    // return xyz[0] + xyz[1];
    return xyz.reduce((aa, bb) => aa + bb);
}

if(abc([1,2]) === 3) {
    console.log("Passed!");
} else {
    console.log("Failed");
}

if(abc([1,2,3]) === 6) {
    console.log("Passed!");
} else {
    console.log("Failed");
}