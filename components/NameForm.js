import { Component } from 'react';
class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};
    }

    render(){
        return <div>
            {
                this.props.users.map(user => {
                    return <div className="userButton">
                        <div className={'userName butt ' + this.props.colorClassPerUser[user.key]} key={'' + user.key }>
                                    <span>{user.name}</span>
                        </div>
                    </div>
                })
            }

            <h4>Add a person:</h4>
            <div></div><input type="text" id='name-form-input' value={this.state? this.state.name: ''}
                    onChange={(event) => {
                        this.setState({ name: event.target.value });
                    }} />
            <button onClick={() => this.props.onOk(this.state.name)}>OK</button>
        </div>
    }
}

export default NameForm;