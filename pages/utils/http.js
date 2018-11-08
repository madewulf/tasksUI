import fetch from 'isomorphic-unfetch';

async function postJson(url, body) {
    const res = await fetch(url, {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    const j = await res.json();
    return j;
}

export default {postJson: postJson};
