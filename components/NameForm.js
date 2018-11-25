import { Component } from 'react';
import http from '../utils/http'
import { getColorClassPerUser } from '../utils/colors'

class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', list: this.props.list};
    }

    async onNamePicked(name) {
        if (name) {
            const user = await(http.postJson('http://localhost:8000/api/u/', {
                name: name
            }))

            const list = await(http.putJson(`http://localhost:8000/api/l/${this.state.list.url_key}/`, {
                'users': [user.key],
            } ))
            this.setState({list: list, name: ''})
        }
    }

    render(){
        const colorClassPerUser = getColorClassPerUser(this.state.list.members);
        return <div>
            {
                this.state.list.members.map(user => {
                    return <div className="userButton">
                        <div onClick={() => this.props.onUserPicked(user.key)} className={'userName butt ' + colorClassPerUser[user.key]} key={'' + user.key }>
                                    <span>{user.name}</span>
                        </div>
                    </div>
                })
            }

            <h4>Add a person:</h4>
            <div></div><input type="text" id='name-form-input' value={this.state? this.state.name: ''}
                    onChange={(event) => {
                        this.setState({ name: event.target.value });
                    }} onKeyUp={(e) => {
            if (e && e.key == 'Enter')  this.onNamePicked(this.state.name);
        }} />
            <button className="okButton" onClick={() => this.onNamePicked(this.state.name)}>OK</button>
            <style jsx>
                {`
          .okButton {
              margin-left:10px;
              height:37px;
          }
            `}</style>
        </div>
    }
}

export default NameForm;