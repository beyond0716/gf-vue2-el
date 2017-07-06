import axios from 'axios'
import qs from 'qs'

function finalUrl(url, params) {
  return [url].concat(params).join('/');
}

function successCall(res) {
  const data = res.data;
  if (data.success) {
    return Promise.resolve(data.data)
  }
  return Promise.reject(data.data)
}

function failCall(error) {
  console.log(error);
}

function get(url,{params=[],query={}}) {
  return axios.get(finalUrl(url,params),{params:query}).then(successCall).catch(failCall)
}

function post(url,{params=[],query={}}) {
  return axios.post(finalUrl(url,params),qs.stringify(query)).then(successCall).catch(failCall)
}

function put(url,{params=[],query={}}) {
  return axios.put(finalUrl(url,params),qs.stringify(query)).then(successCall).catch(failCall)
}

function del(url,{params=[],query={}}) {
  return axios.delete(finalUrl(url,params),qs.stringify(query)).then(successCall).catch(failCall)
}

function patch(url,{params=[],query={}}) {
  return axios.patch(finalUrl(url,params),qs.stringify(query)).then(successCall).catch(failCall)
}

export default{
  get,
  post,
  put,
  del,
  patch
}
