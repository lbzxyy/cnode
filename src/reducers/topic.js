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
    case 'appendTopicList':
    return {
      ...state,
      list: state.list.concat(action.list),
      page: action.page
    }
    default:
      return {
        ...state
      };
  }
}