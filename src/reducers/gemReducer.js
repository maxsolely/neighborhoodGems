import _ from 'lodash'

export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_GEMS':
      return { ...state, ..._.mapKeys(action.payload, 'id') }

    case 'FETCH_GEM':
      return { ...state, [action.payload.id]: action.payload }

    default:
      return state
  }
}