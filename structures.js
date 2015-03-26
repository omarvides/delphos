
function reduceLeftRightOperator(left, right, operator){
    var internalArray = [left, right];
    var operatorObject = {};
    operatorObject[operator] = internalArray;
    return operatorObject;
}

function reduceLeftRight(left, right) {
    var noOperatorObject = {};
    noOperatorObject[left] =  right;
    return noOperatorObject;
}

module.exports.reduceLeftRightOperator = reduceLeftRightOperator;
module.exports.reduceLeftRight = reduceLeftRight;