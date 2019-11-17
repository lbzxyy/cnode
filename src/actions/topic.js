import { gettopicsData } from '../api/servers'
// 获取第一页列表数据
export  function  gettopics(params) {
  return async(dispatch) => {
    let {data, success} = await gettopicsData(params)
    if(success) {
      dispatch({
        type: 'gettopics',
        list: data
      })
      console.log(wx,'weeewwwwwwwww')
      // 切换菜单的时候，请求的是第一条数据 滚动条回顶部
      wx.pageScrollTo({
       scrollTop: 0
     })
    }
    
  }
}
// 获取下一页数据
export function getNextTopic(params) {
  return async(dispatch) => {
    let {data, success} = await gettopicsData(params)
    if(success) {
      if(data.length>0){
        dispatch({
          type: 'appendTopicList',
          list: data,
          page: params.page
        })
      }
    }
  }
}