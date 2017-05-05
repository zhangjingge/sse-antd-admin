import { query } from '../services/details'
import { parse } from 'qs'

export default {
  namespace: 'details',
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
      console.log('detail',data)
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
