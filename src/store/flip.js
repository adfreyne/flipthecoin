const coin = ['heads', 'tails']
const initialState = {
  account: 100,
  coin: coin[0],
  flips: [],
  choice: 1,
  win: false
}

export const play = (amount, choice) => ({
  type: 'PLAY',
  payload: {
    amount,
    choice,
    coin: coin[Math.floor(Math.random() * 2)],
  }
})
export const reducer = (state = initialState, action) => {

  if (action.type === 'PLAY') {
    const {
      amount,
      choice,
      coin,
    } = action.payload
    const win = choice === coin
    console.log('amount: ' + amount, 'choice: ' + choice, 'flipResult: ' + coin, 'eval: ' + win)

    return {
      amount: amount,
      choice: choice,
      coin: coin,

      flips: [coin, ...state.flips],
      account: 100,
    }
  }
  return state
}