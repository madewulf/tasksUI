import Layout from '../components/SiteLayout.js'
import React, { Component, PropTypes } from 'react';
import http from '../utils/http'

class CreatePage extends Component {
    componentWillMount() {
        this.setState({ username: '', password: '', name: '', mail: '', error: '' });
    }

    async login() {
        this.setState({ error: ''})
        const j = await http.postJson(`/api/account/`, this.state);
        if (j.token!=null) {
            document.cookie = "x-tasklist-token=" + j.token
            document.location = "/";
        } else {
            this.setState({ error: j.error })
        }
    }
    render() {
        return <Layout>
            <h2>Create account</h2>
            <div>Username</div><input type="text" id="username" value={this.state.username}
                                      onChange={(event) => {
                                          this.setState({ username: event.target.value, error: '' });
                                      }} />

            <div>Password</div><input type="password" id="password" value={this.state.password}
                                      onChange={(event) => this.setState({ password: event.target.value, error: '' })} />
            <div>Name</div><input type="text" id="name" value={this.state.name}
                                      onChange={(event) => this.setState({ name: event.target.value, error: '' })} />
            <div>Email</div><input type="text" id="email" value={this.state.email}
                                      onChange={(event) => this.setState({ email: event.target.value, error: '' })} />
            { this.state.error && <div className="error">{this.state.error}<br/></div> }
            <div><button onClick={() => this.login()}>Create account</button></div>
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