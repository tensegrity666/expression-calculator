function expressionCalculator(expr) {
    let expression = expr.split(' ');
    let sign = [];

    expression.forEach(element => {
        if (isNaN(element)) {
            sign.push(element);
            const index = expression.indexOf(element);
            expression.splice(index, 1);
        }
    });
    console.log(expression);
    console.log(sign);
}

module.exports = {
    expressionCalculator
}