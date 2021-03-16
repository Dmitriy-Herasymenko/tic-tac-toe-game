export function calculateWinner(squares) {

    const  lines3x3 = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    const lines5x5 = [
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

        [0, 6, 12, 18, 24],
        [1, 7, 13, 19],
        [2, 8, 14],
        [5, 11, 17, 23],
        [6, 13, 18, 24],
        [7, 13, 19],
        [10, 16, 22],
        [11, 17, 23],
        [12, 18, 24],


        [4, 8, 12, 16, 20],
        [3, 7, 11, 15],
        [2, 6, 10],
        [9, 13, 17, 21],
        [8, 12, 16, 20],

    ];
    const lines = squares.length === 25 ? lines5x5 : lines3x3;

    for (let i = 0; i < lines.length; i++) {

        if(squares.length === 9) {
            const [a, b, c] = lines[i];
            if (squares[a]
                && squares[a] === squares[b]
                && squares[a] === squares[c]) {
                return squares[a]
            }
        }

        if(squares.length === 25) {
            const [a, b, c, d, e] = lines[i];
            if (squares[a]
                && squares[a] === squares[b]
                && squares[a] === squares[c]
                && squares[a] === squares[d]
                && squares[a] === squares[e]) {
                return squares[a]
            }
        }
    }
    return null
}