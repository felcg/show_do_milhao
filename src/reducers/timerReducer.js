const timerReducer = (state = false, action) => {
  switch (action.type) {
  case 'ALTERA_TIMER':
    return action.timer
  default:
    return state
  }
}

export const alteraTimer = (timer) => ({
  type: 'ALTERA_TIMER',
  timer,
})

export default timerReducer
