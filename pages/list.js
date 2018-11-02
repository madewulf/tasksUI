import Layout from '../components/SiteLayout';
import fetch from 'isomorphic-unfetch';

const List = (props) => {
    const colors = ['orange', 'blue', 'green', 'pink'];
    const colorClassPerUser = {};
    const list = props.list;
    list.members.map((member, index) => {
        colorClassPerUser[member.id] = colors[index % colors.length];
    })
    return <Layout>
        <h1>{props.list.name}</h1>
        <p>{props.list.description}</p>
        <div>
            {props.list.tasks.map((task) => {
                return <div className="listItem" key={task.key}>
                    <label className="container" name={task.key}>{task.text}
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                    {task.assigned_to.map(user =>
                        <span className={'userName ' +  colorClassPerUser[user.id]}>
                            <span>{user.name}</span>
                        </span>
                    )}
                </div>;
            })}

        </div>
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
};

List.getInitialProps = async function() {
    const key = 'ndxlj';
    const res = await fetch(`http://localhost:8000/api/l/${key}/`);
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data}`);

    return {
        list: data,
    };
};

export default List;