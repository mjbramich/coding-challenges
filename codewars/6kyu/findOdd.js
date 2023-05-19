//My solution

function findOdd(A) {
    // reduce array into object that counts how many times num appears
    let count = A.reduce((acc, cur) => {
        acc[cur] ? (acc[cur] += 1) : (acc[cur] = 1);
        return acc;
    }, {});

    let odd = 0;
    for (let [key, value] of Object.entries(count)) {
        if (value % 2) odd = key;
    }

    return Number(odd);
}