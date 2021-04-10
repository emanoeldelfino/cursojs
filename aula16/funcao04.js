function factorial(x) {
    let fac = 1
    for (let i=x; i >= 1; i--) {
        fac *= i
    }
    return fac
}

console.log(factorial(5))

// 5! = 5 x 4 x 3 x 2 x 1 = 120
