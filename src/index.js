function expressionCalculator(expr) {
    expr = expr.replace(/\s/g, '').replace(/(\*|\/|\+|\-)/g, ' $& ');
    let expression = expr.split(' ');

    for (i = 0; i < expression.length; i++) {
        if (expression[i] === '*') {
            expression[i] = +expression[i - 1] * +expression[i + 1];
            expression.splice(i - 1, 1);
            expression.splice(i, 1);
            i--;
        }

        if (expression[i] === '/') {
            if (expression[i + 1] === '0') throw Error('TypeError: Division by zero.');
            expression[i] = +expression[i - 1] / +expression[i + 1];
            expression.splice(i - 1, 1);
            expression.splice(i, 1);
            i--;
        }
    };

    for (i = 0; i < expression.length; i++) {
        if (expression[i] === '+') {
            expression[i] = +expression[i - 1] + +expression[i + 1];
            expression.splice(i - 1, 1);
            expression.splice(i, 1);
            console.log(expression);
            i--;
        }

        if (expression[i] === '-') {
            expression[i] = +expression[i - 1] - +expression[i + 1];
            expression.splice(i - 1, 1);
            expression.splice(i, 1);
            i--;
        }
    };

    return +expression;
}

module.exports = {
    expressionCalculator
}