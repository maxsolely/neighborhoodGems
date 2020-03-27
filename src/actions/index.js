import jsonDatabase from '../api/jsonDatabase'

export const fetchGems = () => async dispatch => {
  const response = await jsonDatabase.get('/gems')
  dispatch({ type: 'FETCH_GEMS', payload: response.data })
}

export const fetchGem = id => async dispatch => {
  const response = await jsonDatabase.get(`/gems/${id}`)
  dispatch({ type: 'FETCH_GEM', payload: response.data })
}
