/* eslint-disable import/prefer-default-export */
import HTTP from "./http"

export const gettopicsData = (params) => {
  return HTTP.get('/topics', params)
}
