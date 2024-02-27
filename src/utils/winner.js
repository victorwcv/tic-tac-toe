export default function checkWinner(state) {
  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < win.length; i++) {
    const [a, b, c] = win[i];
    if (state[a] === state[b] && state[b] === state[c] && state[a] !== null ) {
      let code = win[i].join('');
      let player = state[a];
      console.log(code);
      return [player, code]
    }
  }
  return null;
}

