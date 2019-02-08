import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config'
const {publicRuntimeConfig} = getConfig()

async function jsonReq(path, method, body, token) {
    const url = "https://tasks.multitasked.net" + path
    const headers = {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    }

    if (token) {
        headers['x-tasklist-token']=token;
    }
    const res = await fetch(url, {
        method: method,
        headers: headers,
        body: JSON.stringify(body)
    });
    const j = await res.json();
    return j;
}

async function postJson(path, body, token) {
    return jsonReq(path, 'post', body, token);
}

async function putJson(path, body, token) {
    return jsonReq(path, 'put', body, token);
}

async function getJson(path, token) {
    return jsonReq(path, 'get', undefined, token);
}

export default { postJson, putJson, getJson };
