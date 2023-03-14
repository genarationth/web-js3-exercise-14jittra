function Welcome (name1, name2 , name3) {
    console.log("Welcome " + name1 +" "+ name2 + " "+ name3 );
}
Welcome ("ingny","ingnun","ingnoon")


// 2

const myAge = (birthYear) => {
    
    const thisDate = new Date();
    const thisYear = thisDate.getFullYear();
    const age = thisYear - birthYear;
    return age;
}


 const calAge = myAge(1987);
console.log(calAge);