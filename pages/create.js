import Layout from '../components/SiteLayout.js'
import React, { Component, PropTypes } from 'react';
import Router from 'next/router'
import http from '../utils/http'

class CreatePage extends Component {
    componentWillMount() {
        this.setState({ name: '', description: '', nameError: '' });
    }

    async createList() {
        if (this.state.name == '') {
            this.setState({ nameError: 'Name is mandatory'})
        } else {
            const j = await http.postJson(`http://localhost:8000/api/l/`, this.state);
            Router.push('/l/' + j.url_key);
        }
    }
    render() {
        return <Layout>
            <h2>Create your list</h2>
            <div>Name</div><input type="text" id="name" value={this.state.name}
                onChange={(event) => {
                    this.setState({ name: event.target.value, nameError: '' });
                }} />
            { this.state.nameError && <div className="error">{this.state.nameError}</div> }
            <div>Description</div><input type="text" id="description" value={this.state.description}
                onChange={(event) => this.setState({ description: event.target.value })} />
            <div><button onClick={() => this.createList()}>Create</button></div>
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