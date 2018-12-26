import Layout from '../components/SiteLayout';
import Modal from '../components/Modal';
import NameForm from '../components/NameForm';
import {Component} from 'react';
import http from '../utils/http';
import {getColorClassPerUser} from '../utils/colors';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskText: '',
            list: JSON.parse(JSON.stringify(props.list)),
            showModal: false,
            editingTask: false
        };
    }

    static async getInitialProps(props) {
        let key = props.query.title;
        const data = await http.getJson(`/api/l/${key}/`);

        return {
            list: data,
        };
    }

    async onTaskUnassign(taskKey, userKey) {
        await http.putJson(`/api/t/${taskKey}/`, {
            'users': ['-' + userKey],
        });
        const list = await http.getJson(`/api/l/${this.state.list.url_key}/`);
        this.setState({showModal: false, list: list});
    }

    async onTaskAssign(task) {
        this.setState({clickedTask: task});
        this.setState({showModal: true});
    }

    async onUserPick(key) {
        await http.putJson(`/api/t/${this.state.clickedTask.key}/`, {
            'users': [key],
        });
        const list = await http.getJson(`/api/l/${this.state.list.url_key}/`);
        this.setState({showModal: false, list: list});
    }

    async createTask() {
        if (this.state.taskText.trim() != '') {
            const newTask = await http.postJson('/api/t/', {
                text: this.state.taskText,
                list: this.props.list.url_key,
            });
            const listClone = JSON.parse(JSON.stringify(this.state.list));
            listClone.tasks.push(newTask);
            this.setState({list: listClone, taskText: ''});
        }
    }

    async taskClick(target) {
        let status = target.checked ? 'done' : 'waiting';
        await http.putJson('/api/t/' + target.id + '/', {
            status: status,
        });
        const newList = await http.getJson(`/api/l/${this.state.list.url_key}/`);
        this.setState({list: newList, editingTask: true});
    }

    taskEdit(taskKey) {

        const listClone = JSON.parse(JSON.stringify(this.state.list));
        listClone.tasks.map((task) => {
            if (task.key == taskKey) {
                task.edit = true
            } else {
                task.edit = false
            }
        })
        this.setState({list: listClone, editingTask: false});
    }

    async taskChange(taskKey, text) {
        await http.putJson('/api/t/' + taskKey+ '/', {
            text: text,
        });
        const newList = await http.getJson(`/api/l/${this.state.list.url_key}/`);
        this.setState({list: newList});
    }

    render() {
        const props = this.props;
        const list = this.state.list;

        const colorClassPerUser = getColorClassPerUser(list.members);

        const nameForm = <NameForm list={list}
                                   colorClassPerUser={colorClassPerUser}
                                   onUserPicked={(key) => this.onUserPick(key)}
                                    task={this.state.clickedTask}
                                    />;

        return <Layout meta={props.list}>
            <h1>{props.list.name} <span className="list-edit-icon"><i className="far fa-edit fa-xs"></i></span></h1>
            <p>{props.list.description}</p>
            <div>
                {list.tasks.map((task) => {
                    const className = 'taskText ' + ((task.status === 'done') ? 'strike' : '');
                    return <div className="listItem" key={task.key}>
                        <input type="checkbox" id={task.key} onChange={(event) => {
                            this.taskClick(event.target);
                        }} checked={task.status === 'done'}/>
                            {!task.edit && <span className={className} onClick={() => {
                                this.taskEdit(task.key)
                            }
                            }>{task.text}</span>}
                            {task.edit && <span> <input type="text" autoFocus defaultValue={task.text} onBlur={(event) => {
                                this.taskChange(task.key, event.target.value)
                            }} onKeyUp={(e) => {
                                if (e && e.key == 'Enter') this.taskChange(task.key, event.target.value)
                            }}/> </span>}

                        {task.assigned_to.map(user =>
                            <span className={'userName ' + colorClassPerUser[user.key]}
                                  onClick={() => this.onTaskUnassign(task.key, user.key)}
                                  key={'' + user.key + '' + task.key}>
                                <span>{user.name}</span>
                            </span>,
                        )}
                        {
                            task.assigned_to.length === 0 &&
                            <span className="assignButton" onClick={() => this.onTaskAssign(task)}>Assign</span>
                        }
                        {
                            task.assigned_to.length !== 0 &&
                            <span className="assignButton" onClick={() => this.onTaskAssign(task)}><i
                                className="fas fa-plus"></i></span>
                        }
                    </div>;
                })}

            </div>

            <div><input type="text" id="taskText" autoFocus={!this.state.editingTask} value={this.state.taskText}
                        onChange={(event) => {
                            this.setState({taskText: event.target.value});
                        }} placeholder="New task here ..." onKeyUp={(e) => {
                if (e && e.key == 'Enter') this.createTask();
            }}/>
                <br/>
                <button onClick={() => this.createTask()}>Add</button>
            </div>
            <Modal show={this.state.showModal} onClose={() => this.setState({showModal: false})}
                   innerComponent={nameForm}/>
            <style jsx>{`
            .taskText {
                padding:5px;
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

                .nameLabel {
                    display: inline;
                    font-weight: 100;
                }
                .list-edit-icon {
                    display:none;
                    font-size:0.8em;
                }
                .fa-edit {
                    color: #ddd;
                }
    `}</style>
        </Layout>;
    }
}

export default List;