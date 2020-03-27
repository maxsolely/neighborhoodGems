import jsonDatabase from '../api/jsonDatabase'

export const fetchGems = () => async dispatch => {
  const response = await jsonDatabase.get('/gems')
  dispatch({ type: 'FETCH_GEMS', payload: response.data })
}