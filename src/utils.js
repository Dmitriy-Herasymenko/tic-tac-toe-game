export function calculateWinner(squares) {
    const lines = [
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
        [10, 11, 12,13, 14],
        [15, 16, 17,18, 19],
        [20, 21, 22, 23, 24],
        [0, 5, 10, 15, 20],
        [1, 6, 11, 16, 21],
        [2, 7, 12, 17, 22],
        [3, 8, 13, 18, 23],
        [4, 9, 14, 19, 24],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c, d, e] = lines[i];
        if (squares[a]
            && squares[a] === squares[b]
            && squares[a] === squares[c]) {
            return squares[a]
        }
        if (squares[b]
            && squares[b] === squares[c]
            && squares[b] === squares[d]) {
            return squares[b]
        }
        if(squares[e]
        && squares[e] === squares[d]
        && squares[e] === squares[c]) {
            return squares[e]
        }


    }
    return null
}