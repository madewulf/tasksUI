import Layout from '../components/SiteLayout.js'
import React, { Component, PropTypes } from 'react';
import http from '../utils/http'

class CreatePage extends Component {
    componentWillMount() {
        this.setState({ username: '', password: '', error: '' });
    }

    async login() {
        if (this.state.username == '') {
            this.setState({ error: 'Username is mandatory'})
        } else if (this.state.password == '') {
            this.setState({ error: 'Password is mandatory'})
        }
        else {
            this.setState({ error: ''})
            const j = await http.postJson(`/api/login/`, this.state);
            if (j.token!=null) {
                document.cookie = "x-tasklist-token=" + j.token
                document.location = "/";
            } else {
                this.setState({ error: 'Wrong credentials' })
            }
        }
    }
    render() {
        return <Layout>
            <h2>Login</h2>
            <div>Username</div><input type="text" id="username" value={this.state.username}
                                  onChange={(event) => {
                                      this.setState({ username: event.target.value, error: '' });
                                  }} />

            <div>Password</div><input type="password" id="password" value={this.state.password}
                                         onChange={(event) => this.setState({ password: event.target.value, error: '' })} />
            { this.state.error && <div className="error">{this.state.error}<br/></div> }
            <div><button onClick={() => this.login()}>Login</button></div>
            <style jsx>
                {`
          .error {
              color: red;
          }
            `}</style>
        </Layout>
    }
}

export default CreatePage;