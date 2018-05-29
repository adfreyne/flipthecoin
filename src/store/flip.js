const initialState = {
  account: 100,
  flipResult: '',
  flips: [],
  choice: '',
  win: false
}

export const play = (amount, choice) => ({
  type: 'PLAY',
  payload: {
    amount,
    choice,
    flipResult: Math.floor(Math.random() * 2),
  }
})
export const reducer = (state = initialState, action) => {

  if (action.type === 'PLAY') {
    const {
      amount,
      choice,
      flipResult,
      win
    } = action.payload
    console.log('amount: ' + amount, 'choice: ' + choice, 'flipResult: ' + flipResult, 'eval: ' + win)
    return {
      flipResult: flipResult,
      amount: amount,
      flips: [flipResult, ...state.flips],
      choice: choice,
      account: 100,
      win: choice === flipResult
    }
  }
  return state
}