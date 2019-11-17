import { gettopicsData } from '../api/servers'
// 获取第一页列表数据
export  function  gettopics(params) {
  return async(dispatch) => {
    let {data, success} = await gettopicsData(params)

    console.log(data,'data9999999')

    if(success) {
      dispatch({
        type: 'gettopics',
        list: data
      })
    }
    
  }
}