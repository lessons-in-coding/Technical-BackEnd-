// TODO: Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function(arr) {
    var numMap = {};
    for(var i = 0; i < arr.length; i++){
        var currentNum = arr[i];
        if(numMap[currentNum] === true){
            return false;
        }
        numMap[currentNum] = true;
    }
    return true;
};

module.exports = isUnique;
