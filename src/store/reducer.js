const defaultState = {
  mp3_id: ''
}
 
const reducer = (state=defaultState, action) => {
  switch (action.type) {
    case 'change_mp3_id':
      let obj = Object.assign({}, state)
      obj.mp3_id = action.mp3_id
      return obj
    default:
      return state
  }
}

export default reducer