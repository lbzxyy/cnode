// 显示左侧菜单
export function showDrawer() {
  return (dispatch) => {
    dispatch({
      type: 'showDrawer'
    })
  }
}
// 隐藏左侧菜单
export function hideDrawer() {
  return dispatch => {
    dispatch({
      type: 'hideDrawer'
    })
  }
}