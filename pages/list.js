import Layout from '../components/SiteLayout';
import { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import http from './utils/http'

class List extends Component {
    componentWillMount() {
        this.setState({ taskText: '', list: JSON.parse(JSON.stringify(this.props.list))});
    }

    static async getInitialProps (props) {
        console.log('getInitialProps', props, this.props);
        let key = props.query.title;
        const res = await fetch(`http://localhost:8000/api/l/${key}/`);
        const data = await res.json();

        return {
            list: data
        };
    }

    async createTask() {
        console.log(this.props);
        const newTask = await http.postJson('http://localhost:8000/api/t/', {
            text: this.state.taskText,
            list: this.props.list.url_key,
        });
        const listClone = JSON.parse(JSON.stringify(this.state.list))
        listClone.tasks.push(newTask);
        this.setState({list: listClone});
    }

    render() {
        const props = this.props;
        const colors = ['orange', 'blue', 'green', 'pink'];
        const colorClassPerUser = {};
        const list = this.state.list;
        console.log('list', list);
        list.members.map((member, index) => {
            colorClassPerUser[member.id] = colors[index % colors.length];
        })
        return <Layout>
            <h1>{props.list.name}</h1>
            <p>{props.list.description}</p>
            <div>
                {list.tasks.map((task) => {
                    return <div className="listItem" key={task.key}>
                        <label className="container" name={task.key}>{task.text}
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        {task.assigned_to.map(user =>
                            <span className={'userName ' + colorClassPerUser[user.id]}>
                                <span>{user.name}</span>
                            </span>
                        )}
                    </div>;
                })}

            </div>
            <h2>Add a task</h2>
            <div></div><input type="text" id="taskText" value={this.state.taskText}
                onChange={(event) => {
                    this.setState({ taskText: event.target.value });
                }} />

            <button onClick={() => this.createTask()}>Create</button>
            <style jsx>{`
        .listItem {
            padding:5px;
            margin:1px;
        }

        .itemText {
            padding: 3 5;
        }

        .userName {
            padding:3px;
            border-radius: 3px;
            margin-right:3px;
        }
        .userName.orange {
            color: orange;
            border: 1px solid orange;
        }

        .userName.blue {
            color: blue;
            border: 1px solid blue;
        }

        .userName.green {
            color: green;
            border: 1px solid green;
        }
        .container {
     display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  border-radius:3px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
    `}</style>
        </Layout>;
    }
}
 export default List;