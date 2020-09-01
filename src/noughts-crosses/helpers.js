export function calculateWinner(squares) {
    // all straight and diganol possibilittes
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        // object descturcting - naming each value in lines a,b,c
      const [a, b, c] = lines[i];
      // check if X or O is at the first position, then check if the first value equals
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  const squares = [
    null, null, null,
    'X', 'X', 'O',
    null, null, null
  ];
  
  console.log(calculateWinner(squares));