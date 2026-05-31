var divide = function(dividend, divisor) {
    if (dividend === -2147483648 && divisor === -1) {
        return 2147483647;
    }

    let sign = (dividend > 0) === (divisor > 0) ? 1 : -1;

    let dvd = Math.abs(dividend);
    let dvs = Math.abs(divisor);

    let result = 0;

    while (dvd >= dvs) {
        let temp = dvs;
        let multiple = 1;

        while (dvd >= temp + temp) {
            temp += temp;
            multiple += multiple;
        }

        dvd -= temp;
        result += multiple;
    }

    return sign === 1 ? result : -result;
};

console.log(divide(10, 3));