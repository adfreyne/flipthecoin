const initialState = {
  account: 100,
  flipResult: 1,
  flips: [],
  choice: 0,
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
    } = action.payload
    console.log('amount: ' + amount, 'choice: ' + choice, 'flipResult: ' + flipResult)
    return {
      flipResult: flipResult,
      amount: amount,
      flips: [flipResult, ...state.flips],
      choice: choice,
      account: 100,
    }
  }
  return state
}