var structures = require('./structures');

function analyze(parts) {

    if(parts.operator){
        var left = analyze(parts.left);
        var right = analyze(parts.right);
        var response = joinLeftRightOperator(left, right, parts.operator);
        return response;
    }
    else{
        if(parts.field && parts.term){
            var response = joinLeftRightOperator(parts.field, parts.term)
        }else{
            var response = joinLeftRightOperator(parts.left.field, parts.left.term)
        }
        return response;
    }
}

function joinLeftRightOperator(left, right, operator){

    switch(operator){
        case 'AND':
        case 'OR':
            return structures.reduceLeftRightOperator(left,right, operator);
        default:
            return structures.reduceLeftRight(left,right);
    }
}

module.exports.analyze = analyze;