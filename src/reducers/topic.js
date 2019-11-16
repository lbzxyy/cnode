const TOPIC_STATE = {
  page:1,
  limit:20,
  list:[],
  
}

export default (state = TOPIC_STATE, action) => {
  switch (action.type) {
    case 'gettopics':
    return {
      ...state,
      list: action.list
    }
    default:
      return {
        ...state
      };
  }
}