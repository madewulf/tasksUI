import Layout from '../components/SiteLayout.js'
import Button from '../components/Button'
import {Component} from 'react';
import http from '../utils/http';
import Link from 'next/link';


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


class Index extends Component {

    static async getInitialProps(props) {
        let token;
        if (props.req) {
         token = getCookie(props.req.headers.cookie, 'x-tasklist-token')
        } else {
            token = getCookie(document.cookie, 'x-tasklist-token')
            console.log('getting cookie from document', token)
        }
        const data = await http.getJson(`/api/l/`, token);
        return {lists: data.lists, token: token}
    }

    render() {
        if (this.props.lists)
        {
            return <Layout>
                <div className="row">
                    <h2>Your lists</h2>

                </div>
                <div className="row">
                    <ul>
                    {
                        this.props.lists.map(list => <li key={list.url_key}><Link as={`/l/${list.url_key}/`} href={`/l/${list.url_key}/`}><a>{list.name}</a></Link></li> )
                    }
                    </ul>
                </div>
            </Layout>
        } else {
            return <Layout>
                <div className="row"><img style={{width:"100%", border:"1px solid #bbb", borderRadius: "5px"}} src="/static/hero-2.jpg"/> </div>
                <div className="row">
                    <div>1. Create a to-do list</div>
                    <div>2. Share it with other people</div>
                    <div>3. Let them assign the tasks to themselves</div>
                </div>
                <div className="row">
                    <div>
                        <br />
                        <Button alias={'/create'} href={'/create'}></Button>
                    </div>
                </div>

            </Layout>
        }

    }
}

export default Index;