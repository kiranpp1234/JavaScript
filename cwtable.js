const number = prompt('Enter an integer: ')

//creating a multiplication table
for (let i = 1; i <= 10; i++) {


    const result = i * number;

    // display the result
    console.log(`${number} * ${i} = ${result}`)
}