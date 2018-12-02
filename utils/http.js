import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config'
const {publicRuntimeConfig} = getConfig()

async function jsonReq(path, method, body) {
    const url = "https://tasks.multitasked.net" + path
    const res = await fetch(url, {
        method: method,
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    const j = await res.json();
    return j;
}

async function postJson(path, body) {
    return jsonReq(path, 'post', body);
}

async function putJson(path, body) {
    return jsonReq(path, 'put', body);
}

async function getJson(path, body) {
    return jsonReq(path, 'get', body);
}

export default { postJson, putJson, getJson };
