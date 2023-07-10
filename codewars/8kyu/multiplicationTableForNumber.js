function multiTable(number) {
    // need to create a multiplication table
    let table = '';
    for (let i = 1; i <= 10; i++) {
        const sum = i * number;
        table += `${i} * ${number} = ${sum}`;

        if (i <= 9) {
            table += '\n';
        }
    }

    return table;
}
