import { gettopics } from '../api/servers'
// 获取第一页列表数据
export async function  gettopics(params) {
  let {data, success} = await gettopics(params)
  // console.log(result,'result1111111111')
  return (dispatch) => {
    if(success) {
      dispatch({
        type: 'gettopics',
        list: data
      })
    }
    
  }
}