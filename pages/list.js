import Layout from '../components/SiteLayout';
import Modal from '../components/Modal';
import NameForm from '../components/NameForm';
import { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import http from './utils/http'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            taskText: '', 
            list: JSON.parse(JSON.stringify(props.list)), 
            showModal: false,
        };
    }

    static async getInitialProps(props) {
        let key = props.query.title;
        const res = await fetch(`http://localhost:8000/api/l/${key}/`);
        const data = await res.json();

        return {
            list: data
        };
    }

    async onTaskAssign(key) {
        if (this.state.user) {
            const task = await http.putJson(`http://localhost:8000/api/t/${key}/`, {
                'users': [this.state.user.key],
            } );
            const list = await http.getJson(`http://localhost:8000/api/l/${this.state.list.url_key}/` )
            this.setState({list: list});
        } else {
            this.setState({showModal: true});
        }

    }

    async onNamePick(name) {
        const email = name + '@gmail.com';
        const user = await(http.postJson('http://localhost:8000/api/u/', {
            name: name,
            email: email
        }))

        const list = await(http.putJson(`http://localhost:8000/api/l/${this.state.list.url_key}/`, {
            'users': [user.key],
        } ))
        this.setState({showModal: false, list: list, user: user});
    }

    async createTask() {
        const newTask = await http.postJson('http://localhost:8000/api/t/', {
            text: this.state.taskText,
            list: this.props.list.url_key,
        });
        const listClone = JSON.parse(JSON.stringify(this.state.list))
        listClone.tasks.push(newTask);
        this.setState({ list: listClone, taskText:'' });
    }

    async taskClick(target) {
        let status = target.checked ? 'done' : 'waiting';
        await http.putJson('http://localhost:8000/api/t/' + target.id + '/', {
            status: status
        });
        const newList = await http.getJson(`http://localhost:8000/api/l/${this.state.list.url_key}/`);
        this.setState({ list: newList });
    }

    render() {
        const props = this.props;
        const colors = ['orange', 'red', 'pink', 'purple', 'blue', 'lightblue', 'lightgreen', 'green'];
        const colorClassPerUser = {};
        const list = this.state.list;

        list.members.map((member, index) => {
            colorClassPerUser[member.key] = colors[index % colors.length];
        })
        const nameForm = <NameForm users={list.members} colorClassPerUser={colorClassPerUser} onOk={ (name) => this.onNamePick(name)} />;
        return <Layout>
            <h1>{props.list.name}</h1>
            <p>{props.list.description}</p>
            <div>
                {list.tasks.map((task) => {
                    const className = 'taskText ' + ((task.status === 'done') ? 'strike' : '');
                    return <div className="listItem" key={task.key}>
                            <input type="checkbox" id={task.key} onChange={(event) => { this.taskClick(event.target) }} checked={task.status === 'done'} />
                            <span className={className}>{task.text}</span>

                        {task.assigned_to.map(user =>
                            <span className={'userName ' + colorClassPerUser[user.key]} key={'' + user.key + '' + task.key}>
                                <span>{user.name}</span>
                            </span>
                        )}
                        {
                            task.assigned_to.length === 0 &&
                            <span className="assignButton" onClick={() => this.onTaskAssign(task.key)}>Assign</span>
                        }
                    </div>;
                })}

            </div>

            <div><input type="text" id="taskText" value={this.state.taskText}
                onChange={(event) => {
                    this.setState({ taskText: event.target.value });
                }} placeholder="New task here ..." onKeyUp={(e)=> { if(e && e.key == 'Enter') this.createTask() }}/>
<br/>
            <button onClick={() => this.createTask()}>Add</button>
            </div>
            <Modal show={this.state.showModal} onClose={() => this.setState({showModal: false})} innerComponent={nameForm}/>
            <style jsx>{`
            .taskText {
                padding:5px;
                display:inline-block;
            }

            .assignButton {
                color:#1E90FF;
                padding:4px;
                background: #eee;
                border-radius: 3px;
                cursor: pointer;
            }

            .listItem {
                padding:5px;
                margin:1px;
            }

            .itemText {
                padding: 3 5;
            }

            .strike {
                text-decoration: line-through;
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