function getCookie(decodedCookie, cname) {
    var name = cname + "=";
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export function getToken(props) {
    let token;
    if (props.req && props.req.headers.cookie) {
        token = getCookie(props.req.headers.cookie, 'x-tasklist-token')
    } else if (typeof document != 'undefined') {
        token = getCookie(document.cookie, 'x-tasklist-token')
    }
    return token
}

export function logout() {
    document.cookie = 'x-tasklist-token'+'=; Max-Age=-99999999;';
    document.location = '/'
}


export default getToken;