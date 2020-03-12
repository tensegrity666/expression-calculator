function expressionCalculator(expr) {
    let expression = expr.split(' ');
    let sign = [];
    let result = 0;

    expression.forEach(element => {
        if (isNaN(element)) {
            sign = element;
            const index = expression.indexOf(element);
            expression.splice(index, 1);
        }
    });
    console.log(expression);
    console.log(sign);

    if (sign === '*') {
        result = +expression[0] * +expression[1];
    }
    if (sign === '/') {
        if (expression[1] === '0') throw Error('TypeError: Division by zero.');
        result = +expression[0] / +expression[1];
    }
    if (sign === '+') {
        result = +expression[0] + +expression[1];
    }
    if (sign === '-') {
        result = +expression[0] - +expression[1];
    }

    return result;
}

module.exports = {
    expressionCalculator
}