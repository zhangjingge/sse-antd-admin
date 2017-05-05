import { query } from '../services/form'
import { parse } from 'qs'

export default {
  namespace: 'form',
  state: {
  	list: []
  },
  reducers: {
  	querySuccess (state, action) {
      const { list } = action.payload
      return { 
  	      ...state,
	        list,
	    }
    },
  },
  effects: {
    *query ({ payload }, { call, put }) {
      const data = yield call(query, parse(payload))
      console.log('form',data)
      yield put({
          type: 'querySuccess',
          payload: {
            list: data,
          },
        })
    },
  },
  subscriptions: {
  	setup ({ dispatch }) {
      dispatch({ type: 'query' })
    },
  },
};
