import {Component} from 'react';
import http from '../utils/http';

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {list: this.props.list, name:this.props.list.name, description: this.props.list.description};
    }

    async onFeatureChanged(name, value) {
        console.log('onFeatureChanged', name, value)
        if (name) {
            let body = {}
            body[name] = value
            const list = await (http.putJson(`/api/l/${this.state.list.url_key}/`, body));
            this.setState({list: list});
            this.props.onNewList(list);
        }
    }

    render() {
        return <div>
            <div className="list-field">Name</div>
            <input type="text" id='name-form-input' value={this.state ? this.state.name : ''}
                   onChange={(event) => {
                       this.setState({name: event.target.value});
                   }} onBlur={() => {
                this.onFeatureChanged('name', this.state.name);
            }}/>
            <div className="list-field">Description</div>
            <input type="text" id='name-form-input' value={this.state ? this.state.description : ''}
                   onChange={(event) => {
                       this.setState({description: event.target.value});
                   }} onBlur={() => {
                 this.onFeatureChanged('description', this.state.description);
            }}/>

            <div className="list-field">Assignation</div>
            <div>
                <input id="assignation-checkbox" checked={!this.state.list.assignationsOn} type="checkbox" onChange={(event) => { this.onFeatureChanged('assignationsOn', !event.target.checked);}}/> <span htmlFor="assignation-checkbox">Hide <em>Assign</em> button</span>
            </div>
            <div className="list-field">Delete a task</div>
            <div><em>To delete one task, just tap on it and delete its text.</em></div>
            <style jsx>
                {`
                  .okButton {
                      margin-left:10px;
                      height:37px;
                  }
                  .list-field {
                      font-size:1.5em;
                      padding: 0;
                  }
            `}</style>
        </div>;
    }
}

export default EditForm;