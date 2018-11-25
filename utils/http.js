import fetch from 'isomorphic-unfetch';


async function jsonReq(url, method, body) {
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

async function postJson(url, body) {
    return jsonReq(url, 'post', body);
}

async function putJson(url, body) {
    return jsonReq(url, 'put', body);
}

async function getJson(url, body) {
    return jsonReq(url, 'get', body);
}

export default { postJson, putJson, getJson };
