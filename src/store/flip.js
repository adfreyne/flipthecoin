const initialState = {
  flipResult: 1,
  bets: []
}
export const restartGame = () => ({
  type: 'RESTART',
  payload: []
})
export const play = () => ({
  type: 'PLAY',
  payload: Math.floor(Math.random() * 2)
})

export const reducer = (state = initialState, action) => {
  if (action.type === 'RESTART') {
    return {
      flipResult: 0,
      bets: []
    }
  }
  if (action.type === 'PLAY') {
    return {
      flipResult: action.payload,
      bets: [action.payload, ...state.bets]
    }
  }
  return state
}