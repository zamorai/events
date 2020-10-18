import {sampleData} from '../../app/api/sampleData';

const initialState = {
  events: sampleData
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'CREATE_EVENT':
      return {...state, events: [...state.events, action.payload]}
    case 'UPDATE_EVENT':
      return {...state, events: [...state.events.filter(event => event.id !== action.payload.id), action.payload]}
    case 'DELETE_EVENT': 
      return {...state, events: [...state.events.filter(event => event.id !== action.payload)]}
    default:
      return state
  }
}