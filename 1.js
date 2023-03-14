function mariaPayment(payment) {
    const Fee = 3; 
    const Rate = 0.01;
    const interestFee = payment * Rate; 

    const totalCost = payment + Fee + interestFee

    return totalCost 
}
console.log(mariaPayment(4000));