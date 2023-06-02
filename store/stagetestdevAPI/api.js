import axios from "axios"
const stagetestdevAPI = axios.create({
  baseURL: "https://stagetest-dev-88157.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_grty_list(payload) {
  return stagetestdevAPI.get(`/api/v1/grty/`)
}
function api_v1_grty_create(payload) {
  return stagetestdevAPI.post(`/api/v1/grty/`, payload.data)
}
function api_v1_login_create(payload) {
  return stagetestdevAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_signup_create(payload) {
  return stagetestdevAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return stagetestdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return stagetestdevAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return stagetestdevAPI.patch(`/rest-auth/user/`, payload.data)
}
function api_docs_schema_retrieve(payload) {
  return stagetestdevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function rest_auth_login_create(payload) {
  return stagetestdevAPI.post(`/rest-auth/login/`, payload.data)
}
function api_v1_grty_retrieve(payload) {
  return stagetestdevAPI.get(`/api/v1/grty/${payload.id}/`)
}
function api_v1_grty_update(payload) {
  return stagetestdevAPI.put(`/api/v1/grty/${payload.id}/`, payload.data)
}
function api_v1_grty_partial_update(payload) {
  return stagetestdevAPI.patch(`/api/v1/grty/${payload.id}/`, payload.data)
}
function api_v1_grty_destroy(payload) {
  return stagetestdevAPI.delete(`/api/v1/grty/${payload.id}/`)
}
function rest_auth_logout_retrieve(payload) {
  return stagetestdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return stagetestdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_registration_create(payload) {
  return stagetestdevAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return stagetestdevAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return stagetestdevAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return stagetestdevAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload.data
  )
}
function rest_auth_registration_verify_email_create(payload) {
  return stagetestdevAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
export const apiService = {
  api_v1_grty_list,
  api_v1_grty_create,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  rest_auth_login_create,
  api_v1_grty_retrieve,
  api_v1_grty_update,
  api_v1_grty_partial_update,
  api_v1_grty_destroy,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_verify_email_create
}
