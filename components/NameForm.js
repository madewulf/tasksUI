import { Component } from 'react';
class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};
    }

    render(){
        return <div>
            <h2>Please enter your name:</h2>
            <div></div><input type="text" id='name-form-input' value={this.state? this.state.name: ''}
                    onChange={(event) => {
                        this.setState({ name: event.target.value });
                    }} />
            <button onClick={() => this.props.onOk(this.state.name)}>OK</button>
        </div>
    }
}

export default NameForm;