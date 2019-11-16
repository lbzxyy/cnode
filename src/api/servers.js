/* eslint-disable import/prefer-default-export */
import HTTP from "./http"

export const gettopics = (params) => {
  return HTTP.get('/topics', params)
}
